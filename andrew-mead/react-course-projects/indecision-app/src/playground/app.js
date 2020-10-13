class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }))
      }
    }
    catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }

  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount!');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }))
  }


  handleAddOptions(value) {
    if (!value) {
      return 'Please enter something to add.';
    } else if (this.state.options.indexOf(value) > -1) {
      return 'That option already exists.';
    }
    this.setState((prevState) => ({ options: prevState.options.concat([value]) }));
  }



  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randomNum];
    alert(choice);
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOptions={this.handleAddOptions} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Options = (props) => {
  return (
    <div className="optionsList" >
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol >
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {props.options.map((option, index) => (
          <Option
            key={index}
            value={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div >
  );
};

const Option = (props) => {
  return <li>
    {props.value}
    <button
      onClick={(e) => { props.handleDeleteOption(props.value) }}>
      Remove
  </button>
  </li>;
};



const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOptions(option);
    this.setState(() => ({ error }));
    if (!error) { e.target.elements.option.value = ''; }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption} >
        <input type='text' name='option' />
        <button>Add option</button>
        {this.state.error && <p>{this.state.error}</p>
        }
      </form >
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
