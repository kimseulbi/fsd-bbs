import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import PostForm from './PostForm'

const asctions = {
    onSubmit: action('onSubmit')
}
storiesOf("PostForm", module)
  // 함수를 반환하고 자기한테 들어오는 인수를, 테스트용 함수를 쉽게 만듦
  // 특정 상황에서만 호출되는데 특정 상황에 확인해볼때 사용 합니다. action
  // 화면을 넘어가게 하는 기능. linkTo
  .add("default", () => <PostForm {...asctions} />)
    .add("editing", () => <PostForm onSubmit={linkTo('PostDetailView')}{...asctions} editing={true} />);
