// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import connectionMongo from "../../../../lib/mongodb"
import PostModel from "../../../../models/PostModel"


const handler = async (req, res) => {

  await connectionMongo()
  
  const { query:{posts} } = req;


    const getThePost = await PostModel.findOne({slug: posts})

    if (!getThePost) {
      return res.json({no: true})
    }

    res.json(getThePost)
  }





export default handler;