import React from 'react'

export const LinkCard = ({link}) => {
  return (
      <div className="wrapper-profile">
        <h2>
          Link
        </h2>
        <p>Your Link to: <a rel="noopener noreferer" target="_blank" href={link.to}>{link.to}</a></p>
        <p>Your Link from: <a rel="noopener noreferer" target="_blank" href={link.from}>{link.from}</a></p>
        <p>LinkClics: <strong>{link.clicks}</strong></p>

      </div>
  )
}