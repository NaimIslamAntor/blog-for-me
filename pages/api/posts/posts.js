import connectionMongo from "../../../lib/mongodb"
import PostModel from "../../../models/PostModel"


const handler = async(req, res) => {
  await connectionMongo()

  const posts = await PostModel.find().lean()
  res.json(posts)
}

export default handler


//MONGODB_URI=mongodb://localhost:27017/blog-for-me