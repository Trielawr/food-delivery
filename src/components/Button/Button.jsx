import React from 'react'

const Button = ({className, type, text}) => {
  return (
    <>
        <button
            className={className}
            type={type || 'button'}>
            {text}
        </button>
    </>
  )
}

export default Button;