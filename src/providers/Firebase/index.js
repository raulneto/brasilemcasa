import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import app from 'firebase/app'
import 'firebase/database'
import 'firebase/analytics'

const config = {}

export class Firebase {
    constructor() {
        app.initializeApp(config)
        app.analytics()
        this.db = app.database()
    }
}

const FirebaseContext = createContext(null)

export function FirebaseProvider({ children }) {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            {children}
        </FirebaseContext.Provider>
    )
}

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default FirebaseContext
