import { FETCH_POSTS, FETCH_POST, DELETE_POST, PAGINATE_BLOG} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POST:
      const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;
      return { ...state, [post.id]: post};
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case PAGINATE_BLOG:
      const blogPage = Object.keys(action.payload);
      return {pageOfItems: action.payload.data};
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
