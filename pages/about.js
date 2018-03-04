import React from 'react'
import Page from '../components/page'

class Index extends React.Component {
	static async getInitialProps() {
		return {}
	}

	render() {
		return (
			<Page>
				<h2>About</h2>
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
