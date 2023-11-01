import { emailIsValid } from 'helpers/emailIsValid';
import React, { useState } from 'react';
// import { useSigninMutation } from 'redux/authSlice';
import css from './SubscribeForm.module.css'
function SubscribeForm() {

    const [email,setEmail]=useState('');
    const [error,setError]=useState();
    const [isDisabled, setIsDisabled] = useState(true);
    
    

    const handleEmail = (e)=> {

        setEmail(e.target.value);
   
         if(emailIsValid(e.target.value)){
            setError('')
            setIsDisabled(false)
            e.target.style.borderColor='green'
        }else {
           
            setError('Email is not Valid')

            e.target.style.borderColor='red'
        }
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (error.length===0) {
            const ls_emails = localStorage.getItem('emails')
            const emails= (ls_emails !== null) ? JSON.parse (ls_emails) :[]
            
            if(emails.length > 0 && emails.includes(email)){
                setError('Email address already exists !')
                return;
            }
            

            if(emails.length > 0) {
                localStorage.setItem('emails',JSON.stringify([...emails,email]))
            }else{
                localStorage.setItem('emails',JSON.stringify([email]))
            }
            setEmail('')
            document.getElementById('email').value=''
            setIsDisabled(true)
        }
    }

  return (
    <div className={css.subscribeForm}>
        <p className={css.subscribeFormText}> Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
        <input className={css.subscribeFormImput} type="email" id="email" placeholder="Enter the email"  onChange={handleEmail}/> 
        <button className={css.subscribeFormButton} onClick={handleSubmit} disabled={isDisabled}>SUBSCRIBE</button>
    {error && <div>{error}</div>}
    </div>
  )
}

export default SubscribeForm