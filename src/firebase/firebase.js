import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCRSB5qRrAPnyXAGhVNp_QZ1IjG8k3btck",
  authDomain: "budget-manager-bf782.firebaseapp.com",
  databaseURL: "https://budget-manager-bf782.firebaseio.com",
  projectId: "budget-manager-bf782",
  storageBucket: "budget-manager-bf782.appspot.com",
  messagingSenderId: "480497593566",
  appId: "1:480497593566:web:a16d472309811edb"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider, database as default};

// //child removeExpense
// firebase.database().ref('expenses').on('child_remove', (snapshot)=>{
//   console.log({
//     id:snapshot.key,
//     ...snapshot.val()
//   });
// })
//
// //child_changed
// firebase.database().ref('expenses').on('child_changed',(snapshot)=>{
//   console.log({
//     id:snapshot.key,
//     ...snapshot.val()
//   });
// })
//
//
//
//
//
// firebase.database().ref('expenses').on('value',(snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((child)=>{
//     expenses.push({
//       id:child.key,
//       ...child.val()
//     });
//   });
//   console.log(expenses);
// })
