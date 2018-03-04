import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>"NextJS PWA Kicker"</title>
          <meta name='description' content='NextJS PWA Kicker - sample...' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />

          <link rel='manifest' href='/static/manifest.json' />

          <meta name='theme-color' content='#ff6600' />
          <link rel='shortcut icon' href='/static/icon.png' />
          <link rel='apple-touch-icon' href='/static/icon.png' />
					<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    			<link rel="icon" href="/static/favicon.ico" />
          <meta name='apple-mobile-web-app-title' content='Next PWA Kicker' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='mobile-web-app-capable' content='yes' />
        </Head>

        <Navigation />

        {this.props.children}

        <style jsx global>{`
          body {
            color: #e5e8f0;
            background: #45494f;
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}
