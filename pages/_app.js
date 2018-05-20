import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { PageTransition } from 'next-page-transitions'
import Loader from '../components/loader'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>"NextJS PWA Kicker"</title>
          <meta name='description' content='NextJS PWA Kicker - sample...' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0'
          />
          <link rel='manifest' href='/static/manifest.json' />
          <meta name='theme-color' content='#ff6600' />
          <link rel='shortcut icon' href='/static/icon.png' />
          <link rel='apple-touch-icon' href='/static/icon.png' />
					<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    			<link rel="icon" href="/static/favicon.ico?v=2" />
          <meta name='apple-mobile-web-app-title' content='Next PWA Kicker' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='mobile-web-app-capable' content='yes' />
        </Head>
        <PageTransition
          timeout={100}
          classNames='page-transition'
          loadingComponent={<Loader />}
          loadingDelay={100}
          loadingTimeout={{
            enter: 100,
            exit: 0
          }}
          loadingClassNames='loading-indicator'
        >
        <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          body {
            color: #e5e8f0;
            background: #3c4679;
            margin: 0;
          }
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 5px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 100ms, transform 100ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 50ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity 100ms;
          }
        `}</style>
      </Container>
    )
  }
}