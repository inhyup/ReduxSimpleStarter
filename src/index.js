import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCwy8Kjfxx212GaO4NEcvEtrhgyYr144E0'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { videos: [] }

  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ videos: videos })
  })
}

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

const App2 = () => {
  return <div>Hello</div>
}

ReactDOM.render(<App />, document.querySelector('.container'))
