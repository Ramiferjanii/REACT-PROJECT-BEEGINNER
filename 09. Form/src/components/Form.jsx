import { useState } from "react"
import '../style.css' 


const Form = () => {
     const [username , setUsername] = useState('') 
     const [password , setPassword] = useState('')
     const [confirmPassword , setConfirmPassword] = useState('')
     const [email , setEmail] = useState('') 



     const [errorUserName , setErrorUserName] = useState('') 
     const [errorPassword , setErrorPassword] = useState('') 
     const [errorConfirmPassword , setErrorConfirmPassword] = useState('')
     const [errorEmail , setErrorEmail] = useState('')


    const [userColor , setUserColor ] = useState('') 
    const [emailColor , setEmailColor ] = useState('') 
    const [passwordColor , setPasswordColor ] = useState('') 
    const [confirmPasswordColor , setConfirmPasswordColor ] = useState('')


    const valid = (e) => {
        e.preventDefault()
        if(username === '') {
            setErrorUserName('Please enter your name')
            setUserColor('red')
        } else {
            setErrorUserName('')
            setUserColor('green')
        }

        if(email === '') {
            setErrorEmail('Please enter your email')
            setEmailColor('red')
        } else {
            setErrorEmail('')
            setEmailColor('green')
        }

        if(password === '') {
            setErrorPassword('Please enter your password')
            setPasswordColor('red')
        } else {
            setErrorPassword('')
            setPasswordColor('green')
        }

        if(confirmPassword === '') {
            setErrorConfirmPassword('Please enter your confirm password')
            setConfirmPasswordColor('red')
        } else {
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        }

    }


    return (
        <div className="card">
          <div className="form-header">
            <img 
              src="https://placehold.co/100x100/4a5568/white?text=Profile+Image" // Replace with your image URL
              className="profile-img" 
              alt="Profile" 
            />
            <h2>Create Account</h2>
          </div>
          <div className="card-image">
            <form>
              <div className="input-group">
                <i className="fas fa-user input-icon"></i>
                <input 
                  type="text" 
                  placeholder="Name" 
                  style={{ borderColor: userColor }}
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <p className="error">{errorUserName}</p>
              </div>
    
              <div className="input-group">
                <i className="fas fa-envelope input-icon"></i>
                <input 
                  type="email" 
                  placeholder="Email" 
                  style={{ borderColor: emailColor }}
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <p className="error">{errorEmail}</p>
              </div>
    
              <div className="input-group">
                <i className="fas fa-lock input-icon"></i>
                <input 
                  type="password" 
                  placeholder="Password" 
                  style={{ borderColor: passwordColor }} 
                  value={password}  
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <p className="error">{errorPassword}</p>
              </div>
    
              <div className="input-group">
                <i className="fas fa-lock input-icon"></i>
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  style={{ borderColor: confirmPasswordColor }}
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <p className="error">{errorConfirmPassword}</p>
              </div>
    
              <button type="submit" className="submit-btn" onClick={valid}>
                Register Now
              </button>
            </form>
          </div>
        </div>
  )
}

export default Form
