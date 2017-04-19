import React from 'react'
import { render } from 'react-dom'
import CommentBox from './components/CommentBox.js'

render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('container')
);
