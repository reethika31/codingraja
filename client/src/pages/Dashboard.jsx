// import React,{useState, useContext,useEffect} from 'react'
// import { DUMMY_POSTS } from '../data'
// import { Link, useNavigate} from 'react-router-dom'
// import { UserContext } from '../context/userContext'

// const Dashboard = () => {
//   const [posts , setPosts] = useState(DUMMY_POSTS)

//   const navigate = useNavigate();

//   const {currentUser} = useContext(UserContext)
//   const token = currentUser?.token;

//   // redirect to login page for any use who isn't logged in 

//   useEffect(() => {
//     if(!token) {
//       navigate('/login')
//     }
//   }, [])

//   return (
//     <section className='dashboard'>
//       {
//         posts.length ? <div className='container dashboard__container'>
//         {
//           posts.map(post => {
//           return <article key={post.id} className='dashboard__post'>
//             <div className='dashboard__post-info'>
//               <div className="dashboard__post-thumbnail">
//                 <img src={post.thumbnail} alt="thumbnail" />
//               </div>
//               <h5>{post.title}</h5>
//             </div>
//             <div className='dashboard__post-actions'>
//               <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
//               <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
//               <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
//             </div>
//           </article>
//         })
//       }
//       </div> : <h2 className='center'>You have no posts yet.</h2>
//       }
//     </section>
//   )
// }

// export default Dashboard


import React,{useState} from 'react'
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [posts , setPosts] = useState(DUMMY_POSTS)
  
  return (
    <section className='dashboard'>
      {
        posts.length ? <div className='container dashboard__container'>
        {
          posts.map(post => {
          return <article key={post.id} className='dashboard__post'>
            <div className='dashboard__post-info'>
              <div className="dashboard__post-thumbnail">
                <img src={post.thumbnail} alt="thumbnail" />
              </div>
              <h5>{post.title}</h5>
            </div>
            <div className='dashboard__post-actions'>
              <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
              <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
              <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
            </div>
          </article>
        })
      }
      </div> : <h2 className='center'>You have no posts yet.</h2>
      }
    </section>
  )
}

export default Dashboard