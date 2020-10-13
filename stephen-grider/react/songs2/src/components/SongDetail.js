import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.selectedSong &&
          <div>
            <div>Details For:</div>
            <div>Title: {this.props.selectedSong.title}</div>
            <div>Length: {this.props.selectedSong.duration}</div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);