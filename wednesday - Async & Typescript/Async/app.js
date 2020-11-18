// ---------- SYNC CODE ---------- // //
// EACH LOG GETS ADDED TO THE CALL STACK. IT RUNS, FINISHES AND GETS REMOVED
const ellisFunc = () => {
    console.log("This is the function");
};

console.log('Start');
ellisFunc();
console.log('End');


// ---------- ASYNC CODE ---------- // //
// SETTIMEOUT IS PASSED TO SOMETHIHG CALLED WEBAPI, A WEBAPI KEEPS THE CODE IN TIMER AND WE CONTINUE RUNNING OUR CODE UNTIL TIMER FINISHES
console.log('Start');
setTimeout(() => {
    console.log("I am inside the timeout, I should run last");
}, 3000)
console.log('End');


// 'REAL' EXAMPLE OF ASYNC CODE
// NEW USER IS UNDEFINED ON THE FIRST LOG AS WE HAVE TRIED TO CALL IT BEFORE THE TIMER IS FINISHED
console.log('Start');

const userLogin = (email, password) => {
    setTimeout(() => {
        console.log('Data is returned');
        return {userEmail: email}
    }, 4000)
};

const newUser = userLogin('ellis@test.com', password01);
console.log(newUser);
console.log('End');


// IF WE PASS A CALLBACK AS AN EXTRA ARGUMENT IT WILL RUN LATER (fix issue but in callback hell)
console.log('start');

const userLogin = (email, password, callback) => {
  setTimeout(() => {
    console.log('data is backkkk');
    callback({userEmail: email})
  }, 4000)
}

const getUserBadges = (email, callback) => {
  setTimeout(() => {
    callback(['Badge 1', 'Badge 2', 'Badge 3'])
  }, 2000)
}

const getBadgeDetails = (badge, callback) => {
  setTimeout(() => {
    callback("Badge Title")
  }, 2000)
}

const newUser = userLogin('sam@test.com', 1111, (newUser) => {
  console.log(newUser);
  getUserBadges(newUser.email, badges => {
    console.log(badges);
    getBadgeDetails(badges[0], title => {
      console.log(title);
    })
  })
});

console.log('end');