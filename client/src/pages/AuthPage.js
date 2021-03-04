import React, {useState, useEffect, useContext} from 'react'
// import cn from 'classnames'
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { error, request, clearError} = useHttp()
  const [signup, setSignup] = useState(false)

  const changeLoginHandler = () => {
    setSignup(!signup)
  }

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  // useEffect(() => {
  //   window.M.updateTextFields()
  // }, [])


  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      message(data.message)
    } catch (e) {
    }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {
    }
  }

  return (
      <div className="auth-wrapper">
        <div className="login">
          <h1>{!signup ? 'Login' : "Signup"}</h1>
          {signup &&
          <input
              id="name"
              value={form.name}
              type="text"
              name="name"
              placeholder="Name"
              onChange={changeHandler}
              required="required"
          />
          }
          <input
              className="input-field"
              onChange={changeHandler}
              value={form.email}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required="required"
          />
          <input
              onChange={changeHandler}
              value={form.password}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required="required"/>
          <button
              className="button button-primary button-block button-large"
              onClick={!signup ? loginHandler : registerHandler}>
            {!signup ? 'Login' : "Signup"}
          </button>
          <div className="changeLogin">
            <a

                href="#"
                onClick={changeLoginHandler}
            >
              {signup ? 'or Login' : "or Signup"}
            </a>

          </div>

        </div>
      </div>
  )
}