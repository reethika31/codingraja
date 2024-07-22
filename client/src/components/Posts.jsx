// import React, { useState, useEffect} from 'react'
// import PostItem from './PostItem'
// import { DUMMY_POSTS } from '../data'
// import axios from 'axios'
// import Loader from '../components/Loader'


// const Posts = () => {
//     const [posts, setPosts] = useState(DUMMY_POSTS)
//     const [isLoading, setIsLoading] = useState(false)

//     useEffect(() => {
//       const fetchPosts = async () => {
//         setIsLoading(true);
//         try {
//           const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
//           setPosts(response?.data)          
//         } catch (err) {
//           console.log(err)
//         }

//         setIsLoading(false)
//       }
//       fetchPosts();
//     }, [])

//     if(isLoading) {
//       return <Loader/>
//     }

//   return (
//     <section className="posts">
//         {posts.length > 0 ? <div className='container posts__container'>
//             {
//                 posts.map(({_id: id, thumbnail,category,title,description, creator ,createdAt}) => 
//                 <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} 
//                 title={title} description={description} authorID={creator} createdAt={createdAt} />)
                
//             }
//         </div> : <h2 className='center'>No posts founds</h2> }
//     </section>
//   )
// }

// export default Posts

import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'


const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section className="posts">
        {posts.length > 0 ? <div className='container posts__container'>
            {
                posts.map(({id, thumbnail,category,title,desc,authorID}) => 
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} 
                title={title} description={desc} authorID={authorID} />)
                
            }
        </div> : <h2 className='center'>No posts founds</h2> }
    </section>
  )
}

export default Posts