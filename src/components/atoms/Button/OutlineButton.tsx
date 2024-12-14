import React from 'react'
import { IButton } from '../../../@types/button.interface'

const OutlineButton: React.FC<IButton> = ({ children, type, action, fill, outline, border, gap, width, disabled, loading, outlineColor, customStyle, handleMouseEnter, handleMouseLeave }) => {
  return (
    <>
      <button type={type}
        onClick={action}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
        ${fill ? 'fill' : 'outline'} 
        ${outline === 'white' ? 'border-white text-white' : outline === 'primary' ? 'primary-600' : outline === 'primary-700' ? 'primary-700' : outline === 'outlineColor' ? `${outlineColor}` : ''} 
        ${border ? '' : 'border-none'} 
        ${gap && 'gap'} 
        outline-btn rounded-pill manrope-700 fs-button ${width ? '' : 'w-100'} d-flex align-items-center justify-content-center`}
        style={
          {
            borderColor: outline === 'primary'
            ? 'var(--primary-600)'
            : outline === 'outlineColor'
            ? `var(--${outlineColor})`
            : '',
            width: `${width}px`,
            ...customStyle,
          }
        }
        disabled={loading || disabled}
      >
        {loading? <div className={`spinner-border ${fill && 'text-white'} ${outline && outline === 'white'? 'text-white': 'text-primary'}`}></div>: children}
      </button>
    </>
  )
}

export default OutlineButton
