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
				<h2>Hello!!{' '}</h2>
				<style jsx>{`
          h2 {
            margin: 30px;
          }
        `}</style>					
			</Page>
		)
	}
}

export default Index
