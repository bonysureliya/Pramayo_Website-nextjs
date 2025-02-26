// import React from "react";

// const Button = () => {
//   return (
//     <div className="flex space-x-[20px]">
//       <button className="h-[50px] w-[150px] bg-[#FFF] flex justify-center items-center rounded-[12px] text-[16px] text-black font-semibold  shadow-[0_-6px_10px_0_rgba(0,0,0,0.30)]">
//         See Our Work
//       </button>
//       <button className="h-[50px] w-[150px] bg-[#000] flex justify-center items-center rounded-[12px] text-[16px] text-white font-semibold shadow-[0_-1px_2px_0_rgba(143,182,255,0.25),_0_-5px_15px_0_rgba(19,20,94,0.98)_inset]">
//         Get a Quote
//       </button>
//     </div>
//   );
// };

// export default Button;


import  { ButtonHTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';



const buttonStyles = cva(
  ["flex", "items-center", "justify-center", "transition-colors", "text-white"],
  {
    variants: {
      variant: {
        primary: "h-[50px] w-[150px] bg-[#FFF] flex justify-center items-center rounded-[12px] text-[16px] text-black font-semibold  shadow-[0_-6px_10px_0_rgba(0,0,0,0.30)]",
        secondary:"h-[50px] w-[150px] bg-[#000] flex justify-center items-center rounded-[12px] text-[16px] !text-white font-semibold shadow-[0_-1px_2px_0_rgba(143,182,255,0.25),_0_-5px_15px_0_rgba(19,20,94,0.98)_inset]",
        tertiary: "h-[50px] w-[150px] border border-white flex justify-center items-center rounded-[12px] text-[16px] !text-white font-semibold",
        fournary: "h-[50px] w-[200px] rounded-[12px] bg-[#F7FDFF] shadow-[inset_-1px_-7px_17px_0px_#C9A1FF] text-[#0A0E26] text-[20px]",
        fivenary:  "h-[50px] w-[202px] border border-white flex justify-center items-center rounded-[12px] text-[16px] !text-white font-semibold",
        sixnary: "h-[40px] w-[120px] border border-white flex justify-center items-center rounded-[12px] text-[16px] !text-white font-semibold",
        sevenary: "h-[45px] w-[120px] bg-[#FFF] flex justify-center items-center rounded-[12px] text-[12px] text-black font-semibold  shadow-[0_-6px_10px_0_rgba(0,0,0,0.30)]",
        eightnary:"h-[45px] w-[120px] bg-[#000] flex justify-center items-center rounded-[12px] text-[12px] !text-white font-semibold shadow-[0_-1px_2px_0_rgba(143,182,255,0.25),_0_-5px_15px_0_rgba(19,20,94,0.98)_inset]"
      }
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps< typeof buttonStyles>  {

}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props } : ButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(buttonStyles({ variant }), className)}
        {...props}
      />
    );
  }
);

export default Button;