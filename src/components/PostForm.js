import React, { Component } from "react";
// 새글, 수정 하는 폼
// defaultValue에 다른 값을 또 넣어주기 
export default class PostForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input type="text" name="title" defaultValue={this.props.title}/>
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}/>
          <button>전송</button>
        </form>
      </div>
    );
  }
}
