import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./Postlist.module.css";


function Postlist(){
    const posts =useLoaderData();
  

    return (

        <>
        {/* Statement above is similar to if true the backdrop is visible or vice versa */}
        
        
       { posts.length>0 && ( <ul className={classes.posts}>
            {
                posts.map((post) => < Post key={post.id} id={post.id} author={post.author} greet ={post.body} />)
            }
            
        </ul>)}

        { 
            posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}><h2>NO POSTS YET !...</h2><p>Why don't you try being the first?</p></div>
        }

       
        </>

    );
}

export default Postlist;