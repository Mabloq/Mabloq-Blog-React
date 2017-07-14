import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {store} from '../reducers';
import {Provider} from 'react-redux';
class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }
  _render() {
    ReactDOM.render(
      <Provider store={store}>
        //this.props.childern returns childnodes (html)of parent component
        <div>{this.props.childeren}</div>
      </Provider>,
      this.modalTarget
    );
  }
  render() {
    return <noscript />
  }

}

export default Modal;
