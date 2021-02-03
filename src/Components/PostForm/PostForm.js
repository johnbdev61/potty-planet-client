import React, { Component } from 'react'
import { Input, Textarea, Label } from '../Form/Form'
import AuthApiService from '../../Services/auth-api-service'
import Context from '../../Context/Context'
import Button from '../Button/Button'

export default class PostForm extends Component {
  render() {
    return (
      <form action="">
        <div>
          <div>
            <Label htmlFor='post-title'>
              Title
            </Label><br/>
            <Input
              aria-label='post-title'
              id='post-title'
              name='title'
              required
              />
          </div>
          <div>
            <Label htmlFor='post-description'>
              Description
            </Label><br/>
            <Textarea
              aria-label='post-description'
              id='post-description'
              name='description'
              required
            />
          </div>
          <div>
            <Button type='submit'>
              Submit Post
            </Button>
          </div>
        </div>
      </form>
    )
  }
}
