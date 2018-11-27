import React, { Component } from "react";
import s from './PostForm.module.scss';
import classNames from "classnames";
// 새글, 수정 하는 폼
// defaultValue에 다른 값을 또 넣어주지 않도록 주의
export default class PostForm extends Component {
  static defaultProps = {
      // true가 주어지면, 편집 모드 스타일이 적용됨
      editing: false,
      // 폼 전송 시 호출 되는 함수, title, body를 인수로 받음
      onSubmit: () => {}
  }
  render() {
    const { editing } = this.props
    // 객체 리터럴에서 표현식이 대괄호 안에서 그대로 적용 
    // 표현식에 결과값을 사용 하고 싶어서 [] 그값에 문자열을 사용 
    const titleClass = classNames(s.titleInput, {
      [s.editing]: editing
    })
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          const title = e.target.elements.title.vaule
          const body = e.target.elements.body.vaule
          this.props.onSubmit(title, body)
          }}>
          <input className={titleClass} type="text" name="title" defaultValue={this.props.title}/>
          <textarea name="body" cols="30" rows="10" defaultValue={this.props.body}/>
          <button>전송</button>
        </form>
      </div>
    );
  }
}

