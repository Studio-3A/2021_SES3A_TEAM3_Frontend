import { resetState } from 'sweetalert/typings/modules/state';

export { }; //trick TS into accepting below imports
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/logout", (req: any, res: any) => {
    req.logout(); //kills cookie
    res.send(req.session.passport.user);
  });

  app.get("/api/current_user", (req: any, res: any) => {
    User.findById(req.session.passport.user)
      .select("avatar email fullName experiencePoints completedFavours")
      .exec(function (err, user) {
        if (err) return res.send(err);
        res.send(user);
      });
  });

  app.put("/api/current_user", (req: any, res: any) => {
    User.findByIdAndUpdate(
      req.session.passport.user,
      { email: req.body.email, fullName: req.body.fullName },
      { upsert: true },
      function (err) {
        if (err) {
          console.log("Error");
          res.send(err);
        } else {
          return res.send({
            success: true,
            message: "Successfully updated!",
          });
        }
      }
    );
  });
  app.get("/api/current_user", (req: any, res: any) => {
    res.send(req.session.passport.user);
  });


};