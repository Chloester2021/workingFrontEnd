import React from 'react'
import { Navigate } from 'react-router-dom';
function PrivateRoute({ children }) {
    const isUser = false
    if (!isUser) {
        return <Navigate to="/" />
    }
    return children
}

export default PrivateRoute