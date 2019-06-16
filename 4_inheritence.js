
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
// magazin  Constuctor
function Magazine(title, author, year ,month){
    Book.call(this,title ,author,year);  
    this.month =month;
}
//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
// instattiate Magzine  Object
const mag1 = new Magazine('Mag one', 'Supun Abesekara' ,'2018', 'Jan');
//Use Magazine  Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);