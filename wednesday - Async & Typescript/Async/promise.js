// ---------- PROMISES ---------- // //
// WHAT IS A PROMISE
// A PROMISE IS BASICALLY AN OBJECT THAT GIVES US BACK EITHER A RESULT OF AN ASYNC OPERATION, OR A FAILURE OF AN ASYNC OPERATION

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We got it");
      resolve({user: 'Ellis'})
      reject(new Error("There was a problem"))
    }, 5000)
});

// A PROMISE CAN HAVE 2 RESULTS, RESOLVE OR REJECT
// WE CAN USE .then TO DO SOMETHING FOR WHEN THE RESPONSE COMES BACK AS 'resolved'
// WE CAN USE .catch TO HANDLE OUR ERROR AND DO SOMETHING WHEN THE RESPONSE COMES BACK AS 'rejected'
promise
    .then(user => {
        console.log(user);
    })
    .catch(err => console.log(err.message));


// REFACTOR OF THE "callback hell" WE EXPERIENCED IN app.js
console.log('start');

const userLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('We have data');
      resolve({userEmail: email})
    }, 4000)
  })
};

const getUserBadges = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['Badge 1', 'Badge 2', 'Badge 3'])
      }, 2000)
    })
  };
  
  const getBadgeDetails = (badge) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Badge Title")
      }, 2000)
    })
  };

  userLogin('ellis', 'password01')
    .then(user => getUserBadges(user.email))
    .then(badges => getBadgeDetails(badges[0]))
    .then(badge => console.log(badge));


// ---------- ASYNC AWAIT ---------- // //
const myAsyncFunction = async () => {
    const loggedUser = await userLogin('Ellis', 123);
    const badges = await getUserBadges(loggedUser.email);
    const detail = await getBadgeDetails(badges[0]);
    console.log(detail);
};

myAsyncFunction();