import React, { Component } from "react";
import api from "../api";
import Layout from "./Layout";

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false
    };
  }
  // 비동기 일지라도 기다려주지 않음
  async componentDidMount() {
    const res = await api.get("/posts");
    this.setState({
      posts: res.data
    });
  }

  render() {
    const { posts } = this.state;
    const { onPostDetailPage, onNewPostFormPage, onLoginFormPage} = this.props;
    return (
      <Layout title="게시물 목록" onLoginFormPage={onLoginFormPage}>
        <button onClick={() => onNewPostFormPage()}>새 글 쓰기</button>
        <h1>게시물 목록</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => onPostDetailPage(post.id)}>
              {post.title}
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
