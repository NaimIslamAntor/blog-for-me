import { useState } from "react"
import BlogBox from "./BlogBox"

const BlogContainer = ({ datas }) => {



  const [posts, setPosts] = useState(datas)
  
    return (
        <div className="w-11/12 md:w-10/12 lg:w-3/4 mt-20 mx-auto grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          posts.map(post => {
            return <BlogBox
              key={post?._id}
              title={post?.title}
              image={post?.image}
              date={post?.date}
              slug={post?.slug}
              excerpt={post?.excerpt}
            />
          })
        }
         
    
        </div>
    )
}

export default BlogContainer
