import React from 'react'
import Link from 'next/link'

export default function About() {
  //throw new Error('not today')
  return (
    <div>
      <h1>The About page</h1>
      <Link href='/'>Link to Home Page </Link> 
    </div>
  )
}
