import React, { Component } from "react";
import api from "../api";
import Layout from "./Layout";
import classNames from "classnames";
import './PostList.scss';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true
    };
  }
  // 비동기 일지라도 기다려주지 않음
  async componentDidMount() {
    const res = await api.get("/posts");
    this.setState({
      posts: res.data,
      loading: false
    });
  }

  render() {
    const { posts } = this.state;
    const { onPostDetailPage, onNewPostFormPage, onLoginFormPage } = this.props;
    const tilteClass = classNames(
      "PostList__title",
      // 객체
      {
        "PostList__title--loading": this.state.loading
      }
    );
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <div className="PostList">
          <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
          <h1 className={tilteClass}>게시물 목록</h1>
          <ul className="PostList__list">
            {posts.map(post => (
              <li
                className="PostList-item"
                key={post.id}
                onClick={() => onPostDetailPage(post.id)}
              >
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}
