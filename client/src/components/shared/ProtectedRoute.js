import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import { Route, Redirect } from 'react-router-dom'
import { withUser } from '../../context/UserProvider'

const ProtectedRoute = props => {
    const { token, redirectTo, component: Component, path, otherProps } = props
        return ( token 
                ?   <Route 
                        path={path} 
                        render={props => 
                            <ErrorBoundary>
                                <Component {...props} {...otherProps}/>
                            </ErrorBoundary>}/>
                :   <Redirect to={redirectTo}/>
        )
}

export default withUser(ProtectedRoute)