"use client"
import React, { useState } from 'react'
import useLogin from './hook/useLogin'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Login = () => {

const [{ jwt,isConnected }, { handleLogin }]= useLogin()


  return (
    <div>
      <ConnectButton />
      {isConnected && (
        <button onClick={handleLogin} style={{ marginTop: 20 }}>
          Login with Wallet
        </button>
      )}
      {jwt && <p>JWT: {jwt}</p>}
    </div>
  )
}

export default Login
