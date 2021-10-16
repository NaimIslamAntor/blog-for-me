import mongoose  from 'mongoose'

const Schema = mongoose.Schema

const posts = new Schema({
    image:{
        type: String,
    },
    title:{
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    excerpt:{
        type: String,
    },
    body:{
        type: String,
    }
})



// const PostModel = mongoose.model.posts

const PostModel = mongoose.models.posts || mongoose.model('posts', posts)

export default PostModel



