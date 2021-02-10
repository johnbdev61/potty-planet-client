import React, { Component } from 'react'
import { Label, Textarea } from '../Form/Form'
import Button from '../Button/Button'

export default class MessageForm extends Component {
  render() {
    return (
      <form>
        <div>
          <Label htmlFor='message-input'>
            Enter Message
          </Label>
          <Textarea 
            aria-label='message-input'
            id='message-input'
            name='message'
            required
          />
        </div>
        <div>
          <Button type='submit'>
            Send Message
          </Button>
        </div>
      </form>
    )
  }
}
