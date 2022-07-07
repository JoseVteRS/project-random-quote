

import React from 'react'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}


const Button:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
      <button {...rest} className="rounded text-neutral-400 hover:text-neutral-700 p-1 focus:outline-yellow-500 font-normal  flex items-center gap-2">
        {children}
      </button>
    );
}
export default Button