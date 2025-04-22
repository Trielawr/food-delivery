import React from 'react'

const Button = ({ className, type, text, href, disabled, onClick}) => {
  return (
    <>
      {(type !== 'link') ?
        < button
            className={className}
            type={type || 'button'}
            disabled={disabled}
            onClick={onClick}>
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