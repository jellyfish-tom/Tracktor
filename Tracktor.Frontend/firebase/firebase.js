import firebase from 'firebase/app'
import 'firebase/auth'

var devConfig = {
  apiKey: "AIzaSyDzqDlBVm_xgDKtrWOHpOimi0B7wWEsYTc",
  authDomain: "tracktor-f0545.firebaseapp.com",
  databaseURL: "https://tracktor-f0545.firebaseio.com",
  projectId: "tracktor-f0545",
  storageBucket: "tracktor-f0545.appspot.com",
  messagingSenderId: "76228723535"
}

// create separate firebase app and provide credentials here.
// as stated here: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
const prodConfig = { 

  // apiKey: YOUR_API_KEY,
  // authDomain: YOUR_AUTH_DOMAIN,
  // databaseURL: YOUR_DATABASE_URL,
  // projectId: YOUR_PROJECT_ID,
  // storageBucket: '',
  // messagingSenderId: YOUR_MESSAGING_SENDER_ID,
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth,
}