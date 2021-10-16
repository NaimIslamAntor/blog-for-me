import Link from 'next/link'



const BlogBox = ({ title, image, date, slug, excerpt }) => {
    return (
        <div className="bg-white px-4 py-6 border shadow-md rounded-md">
        {/* image and date div */}

            <div className="">
            <img src={image} 
            alt="vercel-image" className="rounded-lg w-full h-40 object-cover"/>
            <div className="bg-gray-100 mt-1 p-1 text-gray-800 font-normol">Posted on {date}
            </div>
            </div>

            {/* title excerpt and read more button div */}
            
            <div className="mt-4 mb-2">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="mt-2 mb-4 text-base font-normal">{excerpt}</p>
                <Link href={`/blog/${slug}`} passHref>
                <button className="bg-gray-900 text-white py-2 px-4 rounded">Read More</button>
                </Link>
            </div>
        </div>
    )
}

export default BlogBox
