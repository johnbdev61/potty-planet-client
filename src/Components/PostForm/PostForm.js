import React, { Component } from 'react'
import { Input, Textarea, Label } from '../Form/Form'
import PostsServices from '../../Services/post-api-service'
import PostContext from '../../Context/PostContext'
import Button from '../Button/Button'
import './PostForm.css'

export default class PostForm extends Component {
  static defaultProps = {
    onPostSuccess: () => { }
  }
  static contextType = PostContext

  state = { error: null }
  firstInput = React.createRef()

  handlePostSubmit = event => {
    event.preventDefault()
    const { title, content } = event.target
    console.log(event.target)
    this.setState({ error: null })
    PostsServices.addPost({
      title: title.value,
      content: content.value,
    })
    // .then(this.context.addPost)
    .then(() => {
      title.value = ''
      content.value= ''
      this.props.onPostSuccess({ title, content })
    })
    .catch(this.context.setError)

  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='post-form'
        onSubmit={this.handlePostSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div className='center-form'>
          <div>
            <Label htmlFor='post-title'>
              Title
            </Label><br/>
            <Input
              ref={this.firstInput}
              aria-label='post-title'
              id='post-title'
              name='title'
              required
              />
          </div>
          <div>
            <Label htmlFor='post-content'>
              Description
            </Label><br/>
            <Textarea
              aria-label='post-content'
              id='post-content'
              name='content'
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
