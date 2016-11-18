const React = require('react')

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}
this.changeBitRate = this.changeBitRate.bind(this)
this.changeResolution = this.changeResolution.bind(this)
  }

  changeBitRate() {
    this.setState({settings: Object.assign({}, this.state.settings, {bitrate:12})})
  }

  changeResolution(){
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '720p'
        }
      }
    })
  };

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.changeBitRate} />
        <button className='resolution' onClick={this.changeResolution} />
      </div>
    )
  }
}
module.exports = YouTubeDebugger
