import React, {useContext, useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import TextField from '@material-ui/core/TextField';
import {useHistory} from "react-router-dom";

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState('')

  const pressHandler = async event => {
    if (event.key = "Enter") {
      try {
        const data = await request('/api/link/generate', 'POST', {from: link}, {
          Authorization: `Bearer ${auth.token}`
        })
        history.push(`/detail/${data.link._id}`)
      } catch (e) {
      }
    }
  }

  return (
      <div className='wrapper-profile'>
        <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
          <TextField
              onChange={(e) => setLink(e.target.value)}
              value={link}
              type="text"
              id="link"
              placeholder="insert a link"
              fullWidth={true}
              onKeyPress={pressHandler}
          />
        </div>
      </div>
  )
}