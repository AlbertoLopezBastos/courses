import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

const modalRoot = document.getElementById('modal-root');

//ReactDOM.render(<Modal/>, document.querySelector('modal-root'));

export default Modal;
