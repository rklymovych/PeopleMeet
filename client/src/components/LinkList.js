import React from 'react'
import {Link} from 'react-router-dom'

export const LinkList = ({links}) => {
  if (!links.length) {
    return (
        <div className="wrapper-profile"><p>No links yet.</p></div>
    )
  }
  return (
      <div className="wrapper-profile">
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Origin Link</th>
          <th>Short Link</th>
          <th>Short Link</th>
        </tr>
        </thead>

        <tbody>
        {links.map((link, idx) => {
          return (
              <tr key={link._id}>
                <td>{idx + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td>
                  <Link to={`/detail/${link._id}`}>Open</Link>
                </td>
              </tr>
          )
        })}


        </tbody>
      </table>
      </div>
  )
}