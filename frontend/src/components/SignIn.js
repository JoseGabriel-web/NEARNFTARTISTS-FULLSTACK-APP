import React from 'react'
import { logIn } from '../utils'

const SignIn = ({ wallet }) => {
    return (
        <div onClick={() => logIn(wallet)}>
            Login
        </div>
    )
}

export default SignIn
