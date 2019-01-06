import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import moment from 'moment'

class Entry extends Component {
  componentDidMount() {
    this.props.getSingleEntry(this.props.match.params.id)
  }
  render() {
    return (
      <div>
        <h1 className="text-white text-center m-3">Journal Entry</h1>
        <div className="entry">
          <h3>Date: {moment(this.props.singleEntry.entryDate).format('MM/DD/YYYY')}</h3>
          <h3 className="text-center">Title: {this.props.singleEntry.title} </h3>
          <br/>
          <p className="m-5">{this.props.singleEntry.content}</p>
        </div>
      </div>
    )
  }
}

export default withUser(Entry)