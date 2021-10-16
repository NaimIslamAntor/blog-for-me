import Link from 'next/link'

const ReadBlogBox = ({ data }) => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto px-10 py-12 rounded-md mt-10 border shadow-lg">
        <Link  href="/">
             <a className="bg-gray-200 py-2 px-4 text-black">Go Back</a>
        </Link>
            <div className="py-3 mb-3">
                <h1 className="text-2xl font-bold my-2">{data?.title}</h1>

                <div className="text-xm font-medium text-gray-700
                 bg-gray-100 py-1 mt-2 mb-3">{data.date && `Posted on ${data.date}` }</div>
            </div>


            <div className="">
                <img src={data?.image} alt={data?.title} className="w-full object-contain" />
            </div>

          
            <div className="my-3">
                {data?.body}
            </div>


        </div>
    )
}

export default ReadBlogBox
