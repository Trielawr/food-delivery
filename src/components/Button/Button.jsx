import React from 'react'

const Button = ({ className, type, text, href }) => {
  return (
    <>
      {(type != 'link') ?
        < button
            className={className}
            type={type || 'button'}>
            {text}
        </button >
        :
        <a
          className={className}
          href={`${href}`}>
          {text}
        </a>
      }
    </>
  )
}

export default Button;