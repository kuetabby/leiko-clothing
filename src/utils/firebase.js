import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBDAQndVSXiqMqLbbQgYOCh1lI1WpbHlkQ',
  authDomain: 'leiko-clothing-db.firebaseapp.com',
  databaseURL: 'https://leiko-clothing-db.firebaseio.com',
  projectId: 'leiko-clothing-db',
  storageBucket: '',
  messagingSenderId: '6663366734',
  appId: '1:6663366734:web:d37d33c7237a6a50bcbb1f',
  measurementId: 'G-FERXV5JXLX'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
