import api from '../../services/api';
import Post from '../../components/Posts';
import { useState, useEffect} from 'react';

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api.get('/posts')
    .then((response) => {
      setPost(response.data)
    })
  }, []);

  return (
    <>
    <section className="container">
      <h2 className='mt-3'>Main</h2>

      <div className="mt-5 container-posts flex">
        {
          post.map(postSingle => {
            return(
              <>
                <Post
                key={postSingle.id}
                subtitle={postSingle.category}
                title={postSingle.title}
                author={postSingle.author}
                date={postSingle.date}
                >
                {postSingle.resume}
                </Post> 
              </>
            )
          })
        }
      </div>
    </section> 
    </>
  )
}

export default Main;