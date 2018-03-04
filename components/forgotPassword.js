import UsersManagement from '../model/usersManagement'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      canSubmit: false,
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  async handleSubmit (event) {
    event.preventDefault()

    let result = await UsersManagement.resetPassword(this.state.email)
    console.log('result: ', result)
    if (result) {
      window.location = window.location.origin
    }

    // else stay on register and display error
  }

  handleInputChange (event) {
    event.preventDefault()

    var update = this.state
    const value = event.target.value
    update[event.target.id] = value
    update.canSubmit = update.email.length > 3
    this.setState(update)
    console.log('updated state: ', update)
  }

  render () {
    return (
      <div className='login-block'>
        <form action='#' onSubmit={this.handleSubmit}>
          <section>
            <h2>Forgot password?</h2>
            <div className='field-holder'>
              <label htmlFor='email'>Please enter your e-mail address:</label>
            </div>
            <input
              type='email'
              id='email'
              onChange={this.handleInputChange}
              value={this.state.email}
              placeholder=''
            />
            <input
              type='submit'
              value='CREATE ACCOUNT'
              disabled={!this.state.canSubmit}
            />
            <div className='field-holder'>
              <label htmlFor='email'>
                <br />
                We will e-mail a temporary password to you <br />
                Pleae login and reset your password.
              </label>
            </div>
          </section>
        </form>
        <style jsx>{`
          .login-block {
            overflow: hidden;
            width: 100%;
            padding: 0px 5px 5px 20px;
          }
          label {
            display: block;
            margin: 0 0 5px;
            color: #9097a6;
            font-size: 11px;
            line-height: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .field-holder {
            margin: 0 0 10px;
            position: relative;
          }
          .field-holder.success:after,
          .login-block form .field-holder.error:after {
            font-family: 'FontAwesome';
            content: '\f00c';
            position: absolute;
            right: 19px;
            bottom: 14px;
            font-size: 20px;
            line-height: 20px;
            color: #1ad881;
          }
          .field-holder.error:after {
            color: #ff4242;
            content: '\f00d';
          }
          .field-holder .error-text {
            display: none;
          }
          .field-holder.error .error-text {
            display: block;
            position: absolute;
            right: 10px;
            bottom: -5px;
            color: #ff4242;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 11px;
            line-height: 15px;
            background: #4f5359;
            padding: 0 7px;
          }
          .links {
            overflow: hidden;
            padding-top: 20px;
          }
          .links a {
            font-size: 14px;
            line-height: 17px;
            color: #6d85ff;
            float: left;
          }
          .links a.forgot {
            float: right;
          }
          .links a:hover {
            color: #fff;
          }
          input[type='email'] {
            background: #4f5359;
            width: 85%;
            height: 44px;
            outline: none;
            padding: 0 10px;
            margin: 0 0 10px;
            display: block;
            border: 2px solid #fff;
            border-radius: 5px;
            color: #fff;
            font-size: 16px;
            line-height: 20px;
          }
          input[type='submit'],
          button[type='submit'] {
            background: #6d85ff;
            width: 91%;
            height: 44px;
            outline: none;
            padding: 0 10px;
            display: block;
            border: 0;
            font-size: 13px;
            line-height: 44px;
            text-align: center;
            cursor: pointer;
            transition: background 0.5s ease 0s;
            overflow: hidden;
            color: #fff;
            border-radius: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          input[type='submit']:hover,
          button[type='submit']:hover {
            background: #9299a9;
          }
        `}</style>
      </div>
    )
  }
}
