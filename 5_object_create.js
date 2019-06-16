// Object of Protos
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is  ${years} years  old`;
    }
}
/*create  Object*/
// const book1 =Object.create(bookProtos);
// book1.title = "Book ONe";
// book1.author ='supun';
// book1.year ='2019';
const book1 = Object.create(bookProtos, {
    title: {
        value: 'Book One'
    },
    author: {
        value: 'supun lakmal'
    },
    year: {
        value: '2019'
    }
});
console.log(book1);