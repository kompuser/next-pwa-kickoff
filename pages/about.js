import React from 'react'
import Page from '../components/page'

class Index extends React.Component {
	static async getInitialProps() {
		return {}
	}

	render() {
		return (
			<Page>
			<span>About!!</span>
			</Page>
		)
	}
}

export default Index
