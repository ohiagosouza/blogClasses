const Comment = require("./Comment.js")

class Post {
  constructor(title, body, author){
    this.title = title
    this.body = body
    this.author = author
    this.comments = []

    // Created at é um recurso para colocar a data de quando foi criado
    this.createdAt = new Date()
  }

  addNewComment(username, body){
    this.comments.push(new Comment(username, body))
  }

}

module.exports = Post