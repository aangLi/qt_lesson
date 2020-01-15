import { Component } from "react";

class Test extends Component {
  render() {
    return (
      <>
        <h2>Hello World</h2>
        <input type="checkbox" />
        <div className="msg-box">{msg}</div>
        <label htmlFor="name">Leo</label>
        <div style={{ height: 50 }}></div>
        <img src={imgSrc} alt="" />
      </>

    )
  }
}