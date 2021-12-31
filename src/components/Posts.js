import React, {useState, useEffect} from 'react';
import axios from 'axios'
import EmployeeCard from './EmployeeCard'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadPosts = () => {
        axios.get('https://asphosting.millerconsulting.com/wpdev/wp-json/wp/v2/cfclark-employees')
        .then( res =>
                setPosts(res.data),
                setIsLoaded(true)
        )
        .catch(err => console.log(err))
    }


    useEffect(() => {
         loadPosts()
         
        } , [])


    return (
        <div>
               <div className="cards-container">
            
            {isLoaded  ? posts.map((post, index) => (
            <EmployeeCard key={post.id} post={post} />
           ))
          : <h2>Loading...</h2>}
          
          </div>
        </div>
    );
    }

export default Posts;
