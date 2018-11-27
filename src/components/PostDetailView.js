import React, { Component } from "react";
import api from "../api";
import Layout from "./Layout";
import { UserConsumer } from "../contexts/UserContext";

export default class PostDetailView extends Component {
  render() {
    const { postId, onEditPostFormPage, userId, title, body } = this.props;
    return (
      <Layout title={title}>
        <h1>게시물</h1>
        <UserConsumer>
          {({ id }) => {
            if (userId === id) {
              return (
                <button onClick={() => onEditPostFormPage(postId)}>수정</button>
              );
            }
          }}
        </UserConsumer>
        <p>{title}</p>
        <div>{body}</div>
      </Layout>
    );
  }
}
