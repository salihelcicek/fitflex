import { SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage

      <SignInButton />
      <p>Welcome to FitFlex</p>
      <SignOutButton />
    </div>
  )
}

export default HomePage