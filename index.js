//   function cl(cl, op = null) {
//       console.log(op + cl);
//   }
//   const s1 = 'hello world';
//   console.log(typeof s1);
//   const s2 = new String('Hello World');
//   console.log(typeof s2);
// console.log(window);
/*Object Literal */
const book1 = {
    title: 'Book One',
    author: 'Supun Lakm al',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author}`;
    }
};
//console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));