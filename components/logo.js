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
            display: inline;
            padding-left: 35%;
            // margin-top: -30px;
          }    
        `}</style>
      </span>
    )
  }
}
