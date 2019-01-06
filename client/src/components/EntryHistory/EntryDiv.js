import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const EntryDiv = ({ entryId, title, date, deleteEntry }) => {
  return (
    <div className="entry-div bg-white p-3 m-2 ">
      <div className="d-flex align-items-center">
      <div>
        <h4>Date: {moment(date).format('MM/DD/YYYY')} </h4>
        <Link to={`/entry/${entryId}`}>
          <h4 className="word-wrap">Title: {title}</h4>
        </Link>
      </div>
      <FontAwesomeIcon className="icon ml-auto" icon={faTrashAlt} size="2x" onClick={()=> deleteEntry(entryId)} />
      </div>
    </div>
  )
}

export default EntryDiv
        