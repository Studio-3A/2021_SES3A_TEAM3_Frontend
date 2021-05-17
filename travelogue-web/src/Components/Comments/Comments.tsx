import React, { Component } from "react";

class Comments extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      comments: [],
      loading: false,
    };
  }

  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    return (
      <div className="App container bg-light shadow">
        <header className="App-header">
          <img src={logo} className={loadingSpin} alt="logo" />
          <h1 className="App-title">
            React Comments
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
        </header>

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about Travelogue</h6>
            {/* Comment Form Component */}
          </div>
          <div className="col-8  pt-3 bg-white">
            {/* Comment List Component */}
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
