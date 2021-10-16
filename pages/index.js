import BlogContainer from '../components/BlogContainer'

export default function Home({ datas }) {
 
  return (
    <>
     <BlogContainer
      datas={datas}
     />

   
    </>
  )
}


// export async function getStaticProps(){
//   const req = await fetch(`${process.env.DOMAIN_NAME}/api/posts/posts`)

//   const data = await req.json()

//   return{
//     props:{
//       datas: data,
//     }
//   }
// }


export async function getServerSideProps(){
  const req = await fetch(`${process.env.DOMAIN_NAME || process.env.VERCEL_URL}/api/posts/posts`)

  const data = await req.json()

  return{
    props:{
      datas: data,
    }
  }
}
