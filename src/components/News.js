import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div>
        This is a news comp
        <NewsItems title="this is a title" description="this is description"/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
        <NewsItems/>
      </div>
    )
  }
}

export default News