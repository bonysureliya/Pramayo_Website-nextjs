import React, { useState } from 'react';

interface SpaceButtonProps { 
  text: string
}

const SpaceButton: React.FC<SpaceButtonProps> = ({text}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="relative z-[999]">
      <div className="relative">
        <button 
          className={`relative text-lg font-medium border-0 cursor-pointer py-3.5 px-5 flex items-center gap-1 whitespace-nowrap rounded-3xl overflow-hidden transition-all duration-250 transform ${
            isHovered ? 'scale-110 shadow-[0_0_3em_1.5em_rgba(225,187,251,0.15),0_0.05em_0_0_rgba(255,255,255,0.4)_inset,0_-0.05em_0_0_rgba(225,187,251,0.05)_inset]' : ''
          } ${
            isActive ? 'scale-100 shadow-[0_0_3em_1.5em_rgba(225,187,251,0.25),0_0.05em_0_0_rgba(255,255,255,0.4)_inset,0_-0.05em_0_0_rgba(225,187,251,0.05)_inset]' : ''
          } bg-gradient-to-br from-black to-gray-900`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onBlur={() => {
            setIsHovered(false);
            setIsActive(false);
          }}
        >
          <span className={`absolute inset-[0.1em] bg-gradient-to-br rounded-3xl transition-all duration-250 ${
            isHovered ? 'from-[#E1BBFB]/45 via-transparent to-black' : ''
          } ${
            isActive ? 'from-[#E1BBFB]/45 via-transparent to-black' : ''
          }`}></span>
          
          <span className={`absolute w-full aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-opacity duration-250 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
          </span>
          
          <label className={`translate-x-[2%] -translate-y-[6%] tracking-[0.01ch] z-10 px-8 font-semibold ${
            isHovered ? 'text-white' : 'text-gray-400'
          } ${
            isActive ? 'font-light animate-[wobble_0.6s_ease-in-out_infinite] text-white' : ''
          }`}>
            {text}
          </label>
        </button>
        <div className="bodydrop"></div>
      </div>
      
      <style jsx>{`
        button:hover label::before,
        button:hover label::after {
          display: block;
        }
        
        label::before {
          content: "";
          position: absolute;
          top: -290%;
          left: 90%;
          rotate: -45deg;
          width: 5em;
          height: 1px;
          background: linear-gradient(90deg, #E1BBFB, transparent);
          animation: 4s shootingStar ease-in-out infinite;
          animation-delay: 1s;
          display: none;
          z-index: -1;
          opacity: 0.5;
        }
        
        label::after {
          content: "";
          display: none;
          position: absolute;
          top: -290%;
          left: 10%;
          rotate: -45deg;
          width: 5em;
          height: 1px;
          background: linear-gradient(90deg, #E1BBFB, transparent);
          animation: 7s shootingStar ease-in-out infinite;
          animation-delay: 3s;
          opacity: 0.5;
        }
        
        button span:nth-child(2)::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 0.5;
          box-shadow:
            140px 20px #E1BBFB,
            425px 20px #E1BBFB,
            70px 120px #E1BBFB,
            20px 130px #E1BBFB,
            110px 80px #E1BBFB,
            280px 80px #E1BBFB,
            250px 350px #E1BBFB,
            280px 230px #E1BBFB,
            220px 190px #E1BBFB,
            450px 100px #E1BBFB,
            380px 80px #E1BBFB,
            520px 50px #E1BBFB;
          z-index: -1;
          transition: all 1.5s ease-in-out;
          animation: 1s glowing-stars linear alternate infinite;
          animation-delay: 0.4s;
        }
        
        button span:nth-child(2)::after {
          content: "";
          position: absolute;
          top: -150px;
          left: -65px;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          opacity: 0.5;
          box-shadow:
            490px 330px #E1BBFB,
            420px 300px #E1BBFB,
            320px 280px #E1BBFB,
            380px 350px #E1BBFB,
            546px 170px #E1BBFB,
            420px 180px #E1BBFB,
            370px 150px #E1BBFB,
            200px 250px #E1BBFB,
            80px 20px #E1BBFB,
            190px 50px #E1BBFB,
            270px 20px #E1BBFB,
            120px 230px #E1BBFB,
            350px -1px #E1BBFB,
            150px 369px #E1BBFB;
          z-index: -1;
          transition: all 2s ease-in-out;
          animation: 1s glowing-stars linear alternate infinite;
          animation-delay: 0.8s;
        }
        
        button:active span:nth-child(2)::before {
          animation: circling 2s linear infinite;
        }
        
        button:active span:nth-child(2)::after {
          animation: circling 1.5s linear infinite;
        }
        
        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateX(-55em) translateY(0);
            opacity: 0.5;
          }
          70% {
            transform: translateX(-70em) translateY(0);
            opacity: 0;
          }
          100% {
            transform: translateX(0) translateY(0);
            opacity: 0;
          }
        }
        
        @keyframes glowing-stars {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
          }
        }
        
        @keyframes circling {
          0% {
            transform: translate(-10px, -20%) rotate(0deg);
          }
          100% {
            transform: translate(-10px, -20%) rotate(200deg);
          }
        }
        
        @keyframes wobble {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-2px, -10px);
          }
          50% {
            transform: translate(2px, 3px);
          }
          75% {
            transform: translate(-1px, 5px);
          }
        }
        
        @keyframes blurMove {
          0%, 100% {
            text-shadow:
              5px 5px 10px rgba(225, 187, 251, 0.4),
              10px 10px 15px rgba(225, 187, 251, 0.3);
          }
          50% {
            filter: blur(1px);
            text-shadow:
              10px 10px 12px rgba(225, 187, 251, 0.4),
              15px 15px 17px rgba(225, 187, 251, 0.3);
          }
        }
      `}</style>
    </div>
  );
};

export default SpaceButton;