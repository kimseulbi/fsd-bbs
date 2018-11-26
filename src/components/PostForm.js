import React, { Component } from "react";
import s from './PostForm.module.scss';
import classNames from "classnames";
// 새글, 수정 하는 폼
// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {
  render() {
    const { editing } = this.props
    // 객체 리터럴에서 표현식이 대괄호 안에서 그대로 적용 
    // 표현식에 결과값을 사용 하고 싶어서 [] 그값에 문자열을 사용 
    const titleClass = classNames(s.titleInput, {
      [s.editing]: editing
    })
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input className={titleClass} type="text" name="title" defaultValue={this.props.title}/>
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}/>
          <button>전송</button>
        </form>
      </div>
    );
  }
}
