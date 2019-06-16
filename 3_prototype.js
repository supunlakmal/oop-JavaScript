
// constructor
function Book(title, author, year) {
    //console.log('book  initialized..')
    this.title = title;
    this.author = author;
    this.year = year;
}
// get summery
Book.prototype.getSummery =function () {
    return `${this.title} was written by ${this.author}`;
}
//get age
Book.prototype.getAge=function(){
const years =new Date().getFullYear() -this.year;
return `${this.title} is  ${years} years  old`;
}
//Revice  / chage  Year
Book.prototype.revise = function(newYear){
this.year =  newYear;
this.revise =true;
}
//instatiate an object
const book1 = new Book('book1', 'supun', '2153');
const book2 = new Book('book2', 'lakmal', '1999');
console.log(book2.getAge());
book2.revise('2017');
console.log(book2);
console.log(book2.getAge());