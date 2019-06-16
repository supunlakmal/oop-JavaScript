// // object
// var userOne = {
//     email: 'supunlakmal61@gmail.com',
//     name: 'Supun Lakmal',
//     login() {
//         console.log(this.email,  'login');
//     },
//     logout(){
// console.log('logout');
//     }
// };
// //console.log(userOne.email);
// //------------------------------->
// userOne.name = 'Lakmal';
// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.email, ' just login in');
//         return this;
//     }
//     logout() {
//         console.log(this.email, 'just  log out');
//         return this;
//     }
//     updateScore() {
//         this.score++;
//         console.log(this.email, 'user  score', this.score);
//         return this;
//     }
// }
// class Admin extends User {
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }
// //==============================>
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function() {
    console.log(this.email, "has  logged  in");
  };
}
var userOne = new User("supunlKMl61@gmail.com", "supun lakmal");
var userTwo = new User("yooo@gmail.com", "red hat");
console.log(userOne);
userTwo.login();
//var admin  = new Admin('lakmal@ceffectz.com' , 'lakmal');
//var users = [userOne, userTwo, admin];
//admin.deleteUser(userTwo);
//console.log(users);
//console.log(userOne);
//console.log(userTwo);
//userOne.login().updateScore().updateScore().logout();
//userTwo.logout();