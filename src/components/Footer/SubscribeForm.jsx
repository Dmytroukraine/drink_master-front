import { emailIsValid } from 'helpers/emailIsValid';
import React, { useState } from 'react'
function SubscribeForm() {

    const[email,setEmail]=useState('');
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


    const handleSubmit = () => {
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
    <div className="subscribeForm">
        <p> Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
        <input type="text" id="email" placeholder="Enter the email"  onChange={handleEmail}/> 
        <button onClick={handleSubmit} disabled={isDisabled}>SUBSCRIBE</button>
    {error && <div>{error}</div>}
    </div>
  )
}

export default SubscribeForm