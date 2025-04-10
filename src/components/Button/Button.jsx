import React from 'react'

const Button = ({ className, type, text, href, disabled }) => {
  return (
    <>
      {(type != 'link') ?
        < button
            className={className}
            type={type || 'button'}
            disabled={ disabled }>
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