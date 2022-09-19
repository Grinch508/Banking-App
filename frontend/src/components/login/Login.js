
import { React, useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider'
import axios from '../../api/axios'
import { Link } from 'react-router-dom'
const LOGIN_URL = '/api/users'

const Login = () => {
    const {setAuth}  = useContext(AuthContext)

    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')
    
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({username: user, password: pwd}), {
                headers: {'Content-Type' : 'application/json'},
                withCredentials: true
            })
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken
            setAuth({user,pwd,accessToken})
            setUser('')
            setPwd('')
            setSuccess(true)
        } catch(err) {
            if(!err.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (errMsg.response?.status === 401) {
                setErrMsg('unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus()
        }
    }
  return (
    <>
        {success ? (
            <h1>You are Logged in</h1>

            
        ):(
        <section>
                <p ref={errRef} className={errMsg ? "errMsg" :
                "offscreen"} aria-live='assertive'>{errMsg}</p>
                 <h1 ClassName='text-color = green'>Please Sign in</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                placeholder='Username' 
                id='username' 
                ref={userRef}
                autoComplete='off' 
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required/><br/>

                <input type='text' 
                placeholder='Password'
                id='password'
                autoComplete='off'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required/><br/>
                <button>Sign in</button>
            </form>
            <p>
                Need an Account?<br/>
                <span className='sign-up-link'>
                    <Link to='createanaccount'>sign up</Link>
                </span>
            </p>
        </section>
        )}
    </>
  )
}

export default Login

