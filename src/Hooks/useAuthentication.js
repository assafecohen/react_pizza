import { useEffect, useState } from 'react';

let auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export function useAuthentication() {
  const [authenicated, setAuthenticated] = useState('loading');
  function login() {
    auth.signInWithPopup(provider);
  }
  function logout() {
    auth
      .signOut()
      .then(function() {
        // Sign-out successful.
      })
      .catch(function(error) {
        // An error happened.
      });
  }
  useEffect(() => {
    auth.onAuthStateChanged(
      function(user) {
        if (user) {
          setAuthenticated(user);
        } else {
          setAuthenticated();
        }
      },
      function(error) {
        console.log(error);
      }
    );
  }, []);
  return { login, loggedIn: authenicated, logout };
}

//

// auth.onAuthStateChanged(
//   function(user) {
//     console.log(user);
//   },
//   function(error) {
//     console.log(error);
//   }
// );
