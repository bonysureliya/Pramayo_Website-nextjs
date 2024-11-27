import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {

}

const Button : React.FC<ButtonProps> = () => {
    return (<button className="border border-white rounded-[12px] px-[25px] py-[12px] text-white ">Let's Talk</button>)
}

export default Button