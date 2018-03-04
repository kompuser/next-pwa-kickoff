export default class Page extends React.Component {
  render () {
    return (
      <span>
        <div className='logo'>
          <a href='/'>
            <img
              src='/static/img/logo.png'
              width='100'
              height='20'
              alt='NextJsPWAKicker'
            />
          </a>
        </div>
        <style jsx>{`
          .logo {
            width: 30%;
            padding-left: 150px;
            margin-top: -30px;
          }    
        `}</style>
      </span>
    )
  }
}
