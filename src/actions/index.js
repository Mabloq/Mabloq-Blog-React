import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post'
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post'
export const PAGINATE_BLOG = 'paginate_blog';

const ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';

export function fetchPosts() {
  const request = axios.get(ROOT_URL);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(ROOT_URL, values)
  .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}
export function paginate(request) {

  return {
    type: PAGINATE_BLOG,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/${id}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: request
  }
}
