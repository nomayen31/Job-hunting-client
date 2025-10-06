import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const AuthProvider = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(email, password)
    }

    const authInfo = {
        loading,
        createUser,
        

    }
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    )
}

export default AuthProvider