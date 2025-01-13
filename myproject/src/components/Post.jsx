import classes from './Post.module.css';
import { Link } from 'react-router-dom';


function Post ({id,author,greet}) {

    return (<>
   
    <div className={classes.post}> 
        <Link to ={id}>
    <p className={classes.text}>{greet}</p>
    <p className={classes.author}>{author}</p>
    </Link>
    </div>
    

    </>);
}

export default Post;