class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  }

  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible && (
          <p>Hey! These are some details you can now see !</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visibility && <p>Hey. These are some details you can now see!</p>}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
