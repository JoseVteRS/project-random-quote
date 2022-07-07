



export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {
  kind: 'primary' | 'secondary'
}

const BUTTON_KIND = {
  primary: "bg-yellow-500 hover:bg-yellow-600 text-neutral-100",
  secondary: "bg-neutral-200 hover:bg-neutral-300 text-neutral-800",
  transparent: ""
};

const Button:React.FC<ButtonProps> = props => {
    const { children, kind = "transparent", ...rest } = props;

    return (
      <button
        {...rest}
        className={`rounded p-2 ${BUTTON_KIND[kind]} focus:outline-yellow-500 font-normal flex items-center gap-2`}
      >
        {children}
      </button>
    );
}
export default Button