// constructor
function Book(title, author, year) {
    //console.log('book  initialized..')
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummery = function () {
        return `${this.title} was written by ${this.author}`;
    }
}
//instatiate an object
const book1 = new Book('book1', 'supun', '2153');
const book2 = new Book('book2', 'lakmal', '1999');
console.log(book2.getSummery());