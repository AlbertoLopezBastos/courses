import React from 'react';

class Rank extends React.Component {
  // = ({ name, entries }) => {

  constructor(props) {
    super(props);

    this.state = {
      emoji: ''
    }
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  generateEmoji = (entries) => {
    fetch(`https://i8yvzc69kf.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(res => res.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null;
    }

    this.generateEmoji(this.props.entries);
  }

  render() {
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}
        </div>
        <div className='white f3'>
          {`Rank Badge: ${this.state.emoji}`}
        </div>
      </div>
    )
  }
}

export default Rank;