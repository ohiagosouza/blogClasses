const Author = require("./Author.js")

const hiago = new Author("Hiago Souza")
const post = hiago.writePost("Legumes gostosos", "Existem muitos legumes bons, veja alguns")
const post2 = hiago.writePost("Clean Code", "How do you create clean code? Check this out!")

post.addNewComment("Michael Jackson", "Very good")
post.addNewComment("Michael Jordan", "That's Awesome")
post2.addNewComment("Arnold", "Amazing")
post2.addNewComment("James", "Thank's for your help")


console.log(hiago)
console.log(post, post2)