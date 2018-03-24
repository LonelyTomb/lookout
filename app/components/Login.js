import React from 'react'

export default class LoginContainer extends React.Component {
  tryLogin = event => {
    event.preventDefault()
    this.props.onSubmit(this.refs.username.value, this.refs.password.value)
  }

  render () {
    const {error, loading} = this.props
    return (
      <form onSubmit={this.tryLogin}>
        <h1>login</h1>
        <input autoFocus type='text' ref='username' /> <br />
        <input type='password' ref='password' />
        {error && <pre className='error'>{JSON.stringify(error, null, 2)}</pre>} <br />
        <button disabled={loading} type='submit'>{loading ? 'Loading...' : 'Submit'}</button> <br />
      </form>
    )
  }
}
