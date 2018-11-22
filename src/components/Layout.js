// 무언가를 감싸는 컴포넌트를 만들때 사용 
import React, { Component } from 'react'
import {UserConsumer} from '../contexts/UserContext'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <UserConsumer>
                {({ username }) => <div>{username}</div>}
            </UserConsumer>
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    )
  }
}
