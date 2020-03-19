import React, { createContext } from 'react'
import PropTypes from 'prop-types'
import app from 'firebase/app'
import 'firebase/database'
import 'firebase/analytics'

const config = {
    apiKey: "AIzaSyC33AIPBIxnBQ25bgIDj19226tBpfYkdgY",
    authDomain: "brasil-em-casa-443b3.firebaseapp.com",
    databaseURL: "https://brasil-em-casa-443b3.firebaseio.com",
    projectId: "brasil-em-casa-443b3",
    storageBucket: "brasil-em-casa-443b3.appspot.com",
    messagingSenderId: "855150563502",
    appId: "1:855150563502:web:b3046b15276e69aa149d3f",
    measurementId: "G-G3QN1CMXET"
}

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
