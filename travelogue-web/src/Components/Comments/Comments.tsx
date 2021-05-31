import React, { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="container-cards">
          <h1>Travelogue Social</h1>
          <p>Share your travel experiences with other Travelogers!</p>
          &nbsp;
          <div className="card">
            <h4>Trip to Gold Coast</h4>
            <p>
              Sun-drenched and built for fun, Australia's Gold Coast hugs
              Queensland's southeast coastline with beaches, shimmering high
              rises, and epic surf breaks. Though it's hedonistic at heart,
              there's also plenty of opportunities for adventure and
              family-friendly attractions beyond its well-known party scene.
            </p>
          </div>
          <div className="card">
            <h4>Tasmania Holiday Review</h4>
            <p>
              Traveling around Tasmania and enjoying its very different
              vegetation. The bush/ forested areas are amazing but sad that the
              enthusiastic owners still have to fight the “logging companies”.
              We thoroughly enjoyed staying with local people who were extremely
              friendly and visiting wineries.
            </p>
          </div>
          <div className="card">
            <h4>Sydney Family Trip</h4>
            <p>
              I must confess we had some pre concieved notions which I am glad
              to say have been destroyed by our experience. We found the people
              uniformly friendly and it reminded me of Barcelona in some ways.
              We will be back and I thought a brief description of our trip may
              be of help to other travelers.
            </p>
          </div>
        </div>

        <form className="comment-form" method="post">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Name of Post"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Share your travel experience... 😊"
              name="message"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Comment &#10148;</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Comments;
