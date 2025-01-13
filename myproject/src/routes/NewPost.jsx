import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link , Form,redirect} from 'react-router-dom';


function NewPost() {

    // const [enteredBody, setEnteredBody] =useState(''); // [0] holds updated value and [1] holds function to change value, useState holds the intial string
    // function changeBodyHandler (event){
    //     setEnteredBody(event.target.value);
    // }



  return ( 
    <>
    <Modal>
    <Form method ='post' className={classes.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea style = {{resize:'none'}} name='body' id="body" required rows={3} />
      </p>

      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required name='author' />
      </p>
      <p className={classes.actions}><Link to ='/' type='button' >Cancel</Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
    </>
  );
}

export default NewPost;


export async function action ({request}) {

  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers:{
        'Content-Type':'application/json'
    } 
})

  return redirect('/');
}