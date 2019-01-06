import React, { Component } from 'react'
import { withUser } from '../../context/UserProvider'
import EntryDiv from './EntryDiv'
import './EntryHistory.css'

class EntryHistory extends Component {
  componentDidMount() {
    this.props.getUserEntries()
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-white m-3">Past Entries</h1>
        <div className="entries-container d-flex flex-column align-items-center">
          {this.props.entries.map(entry => <EntryDiv key={entry._id} entryId={entry._id} title={entry.title} date={entry.entryDate} deleteEntry={this.props.deleteEntry} />)}
        </div>
      </div>
    )
  }

}

export default withUser(EntryHistory)
