// import * as path from "path"
// import * as express from "express"
// import * as webpack from "webpack"
// import * as webpackConfig from "../../../webpack.dev.js" // SHOULDNT IT CHECK NODE.env? 
// import * as mongoose from "mongoose"

import DBModels from "./models/index.js"

import * as express from 'express'
import * as admin from "firebase-admin"
const serviceAccount = require("../tracktor-firebase-adminsdk.json")

class App {
  public app: any
  private db: any
  private sugarsRef: any

  constructor () {
    this.app = express()
    this.mountRoutes()

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://tracktor-f0545.firebaseio.com"
    });

    this.db = admin.database()
    this.sugarsRef = this.db.ref("sugars")

    // this.sugarsRef.push({
    //   userId: 1,
    //   value: 123,
    //   carbohydrates: 0,
    //   foodInsulin: 0,
    //   correctionInsulin: 0,
    //   baseInsulin: 0,
    //   meal: null,
    //   activity: null,
    //   bloodPressure: null,
    //   timestamp: null,
    //   geocoordinates: null
    // });
    // this.sugarsRef.push({
    //   userId: 2,
    //   value: 101,
    //   carbohydrates: 5,
    //   foodInsulin: 5,
    //   correctionInsulin: 0,
    //   baseInsulin: 0,
    //   meal: null,
    //   activity: null,
    //   bloodPressure: null,
    //   timestamp: null,
    //   geocoordinates: null
    // });
  }

  private mountRoutes (): void {
    const router = express.Router()
    
    router.get('/', (req: any, res: any) => {
      res.json({
        message: 'Hello World!'
      })
    })

    router.get("/sugars", (req: any, res: any) => {
      this.sugarsRef.once("value").then((dataSnapshot: any) => {
        res.json(dataSnapshot.val())
      }, function (errorObject: any) {
        console.log("The read from Sugars table failed: " + errorObject.code);
        res.json()
      });
    })
    
    this.app.use('/', router)
  }
}

export default new App().app


// # SAVING AND UPDATING DATA

// https://www.tutorialspoint.com/firebase/firebase_write_data.htm
// SETTING
// var playersRef = firebase.database().ref("players/");
// playersRef.set ({
//    John: {
//       number: 1,
//       age: 30
//    },
	
//    Amanda: {
//       number: 2,
//       age: 20
//    }
// });

// UPDATING
// var johnRef = firebase.database().ref("players/John");
// johnRef.update ({
//    "number": 10
// });

// PUSHING (automatically provides unique ID)
// var playersRef = ref.child("players");
// playersRef.push ({
//    name: "John",
//    number: 1,
//    age: 30
// });

// GETTING KEY (basically ID, unique or not)
// We can get any key from Firebase by using the key() method.
// For example, if we want to get our collection name, we could use the following snippet.

// var ref = new Firebase('https://tutorialsfirebase.firebaseio.com');
// var playersRef = ref.child("players");
// var playersKey = playersRef.key();
// console.log(playersKey); // => "players"

// TRANSACTIONAL DATA (retrieving only for updating purpose)
// Transactional data is used when you need to return some data from the database then make some calculation with it and store it back.
// We want to retrieve property, add one year of age and return it back to Firebase.
// The amandaRef is retrieving the age from the collection and then we can use the transaction method.
// We will get the current age, add one year and update the collection.

// var ref = new Firebase('https://tutorialsfirebase.firebaseio.com');

// var amandaAgeRef = ref.child("players").child("-KGb1Ls-gEErWbAMMnZC").child('age');

// amandaAgeRef.transaction(function(currentAge) {
//    return currentAge + 1;
// });


// # READING DATA

// We can use the on() method to retrieve data.
// This method is taking the event type as "value" and then retrieves the snapshot of the data.
// When we add val() method to the snapshot, we will get the JavaScript representation of the data.

// var ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });

// READING AUTOMIZED (EVENTS) 

// 1. value
//  This event type will be triggered every time the data changes and it will retrieve all the data including children.

// 2. child_added
// This event type will be triggered once for every player and every time a new player is added to our data.
// It is useful for reading list data because we get access of the added player and all previous players.
// var playersRef = firebase.database().ref("players/");

// playersRef.on("child_added", function(data, prevChildKey) {
//    var newPlayer = data.val();
//    console.log("name: " + newPlayer.name);
//    console.log("age: " + newPlayer.age);
//    console.log("number: " + newPlayer.number);
//    console.log("Previous Player: " + prevChildKey);
// });

// 3. child_changed
// This event type is triggered when the data IN REFERENCE CHILD has changed.
// var playersRef = firebase.database().ref("players/");

// playersRef.on("child_changed", function(data) {
//    var player = data.val();
//    console.log("The updated player name is " + player.name);
// });

// 4. child_removed
// If we want to get access of deleted data, we can use child_removed event type.
// var playersRef = firebase.database().ref("players/");

// playersRef.on("child_removed", function(data) {
//    var deletedPlayer = data.val();
//    console.log(deletedPlayer.name + " has been deleted");
// });


// DETACHING CALLBACKS (removing events listeners from data)
// 1. Detach Callback for Event Type
// Let us say we want to detach a callback for a function with value event type.

// Example
// var playersRef = firebase.database().ref("players/");

// ref.on("value", function(data) {
//    console.log(data.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });
// We need to use off() method. This will remove all callbacks with value event type.
// playersRef.off("value");

// 2. Detach All Callbacks
// When we want to detach all callbacks, we can use:

// playersRef.off();


// QUERYING ORDERED DATA:
// var playersRef = firebase.database().ref("players/");

// playersRef.orderByChild("name").on("child_added", function(data) {
//    console.log(data.val().name);
// });

// You can order by: 
// 1. child field - orderByChild($fieldNameAsString)
// 2. key - orderByKey() (no param)
// 3. value - orderByValue() (no param)

// Generally you can:
// 1. CRUD manually - like in every DB (use one of below links and choose one of the CRUD chapters from left menu on TutorialsPoint page)
// 2. Listen for events on data and its fields (remove events listeners as well) 
//  - https://www.tutorialspoint.com/firebase/firebase_event_types.htm
//  - https://firebase.google.com/docs/database/web/lists-of-data 
// 3. Order data with predefined methods https://www.tutorialspoint.com/firebase/firebase_queries.htm 
// 4. Filter data with predefined methods https://www.tutorialspoint.com/firebase/firebase_filtering_data.htm
// 5. Use predefined authentication methods (supported OOTB) https://www.tutorialspoint.com/firebase/firebase_email_authentication.htm
//  - email/pass
//  - google
//  - facebook
//  - github
//  - anonymous
// 6. check if connection to FB DB is alive:
  // var connectedRef = firebase.database().ref(".info/connected");

  // connectedRef.on("value", function(snap) {
  //   if (snap.val() === true) {
  //       alert("connected");
  //   } else {
  //       alert("not connected");
  //   }
  // });

// 7. Support offline OOTB
// 8. Do synchonous updates to many tables - in one query!
