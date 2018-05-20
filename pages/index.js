import React from 'react'
import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Hello, world!</h1>
    <Link href='/about'>
      <a>About us</a>
    </Link>
  </div>
)

export default Index