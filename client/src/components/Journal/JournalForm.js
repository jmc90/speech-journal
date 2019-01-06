import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const JournalForm = ({handleChange, handleSubmit, title, content}) => {
  return (
    <div>
      <Form className="text-white" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input 
            type="text"
            name="title"
            id="title"
            placeholder="Title.."
            value={title}
            onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="entry">Entry</Label>
          <Input 
            type="textarea"
            name="content"
            rows="10" 
            id="entry"
            placeholder="Journal entry.."
            value={content}
            onChange={handleChange} />
        </FormGroup>
        <Button color="info" block>Submit</Button>
        {/* <input 
          type="text"
          name="title"
          placeholder="Entry"
          value={title}
          onChange={handleChange}
           />
       
        <textarea 
          name="content" 
          placeholder="Journal entry.."
          value={content}
          onChange={handleChange}
          cols="30" 
          rows="10"/>
          <button>Submit</button> */}
      </Form>
    </div>
  )
}

export default JournalForm
