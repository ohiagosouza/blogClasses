const Post = require("./Post")

class Author {
  constructor(fullName){
    this.fullName = fullName
    this.allPosts = []
  }

  writePost(title, body){
    const newPost = new Post(title, body, this.fullName)
    this.allPosts.push(newPost) 
    return newPost
  }
}

module.exports = Author