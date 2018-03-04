import React from 'react'
import Link from 'next/link'
import Page from '../components/page'

class Index extends React.Component {
	static async getInitialProps() {
		return {}
	}

	render() {
		return (
			<Page>
			<span>Hello!!</span>
			<Link
					prefetch
					key="aboutPage"
					href="/about"
					as="/about">
				<a
					href="/about"
				>
					About
				</a>
				</Link>
			</Page>
		)
	}
}

export default Index
