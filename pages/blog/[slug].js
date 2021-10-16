
import ReadBlogBox from '../../components/ReadBlogBox'


const  slug = ({ post }) => {
    
    return <ReadBlogBox data={post} />
}




export async function getServerSideProps({params:{slug}}){
  
    const request = await fetch(`${process.env.DOMAIN_NAME || process.env.VERCEL_URL}/api/posts/singlepost/${slug}`)

    const data = await request.json()

    

    if(data.no){
        return {
            notFound: true
        }
    }



    return{
        props:{
            post: data
        }
    } 


}



export default slug





