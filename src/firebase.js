import  firebase from 'firebase/app'
import    "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAHA9nEJVZB7C5ObUaDuYZ8JE0KUD-TI6g",
    authDomain: "nba2-7ffd4.firebaseapp.com",
    databaseURL: "https://nba2-7ffd4.firebaseio.com",
    projectId: "nba2-7ffd4",
    storageBucket: "nba2-7ffd4.appspot.com",
    messagingSenderId: "933311735599",
    appId: "1:933311735599:web:98f640c2cd655d772163da",
    measurementId: "G-Q63WLH3J42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();

  const firebaseArticle = firebaseDB.ref('articles')
  const firebaseTeams = firebaseDB.ref('teams')
  const firebaseVideos = firebaseDB.ref('videos')

  export {
      firebase,
      firebaseDB,
      firebaseArticle,
      firebaseTeams,
      firebaseVideos
  }