import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';


function Modal ({children}){

    const navigate =useNavigate();

    function closeHandler(){
        navigate('/');

    }

    return (

        <>
        <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open = {true} className={classes.modal}>{children}</dialog>  { /** children added to mark the place where the form must be depicted and open is to make it visible  */}

        </>
    );


}

export default Modal;