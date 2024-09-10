import React, { useState } from 'react';
import LoginImg from '../images/login.png';
import Logo from '../images/skyline.png';
import welcomeBack from '../images/welcomeBack.png';

const Login2 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-white">
      {/* Form Section */}
      <div className="w-1/2 mt-8 flex justify-center items-center bg-white">
        <div className="w-2/3 h-full flex flex-col items-center justify-around">
          {/* Logo */}
          <div className="w-[28%] h-[13%]">
            <img src={Logo} alt="Company Logo" className="h-full w-full" />
          </div>
          <div className="text-center w-[75%] h-[15%] flex justify-center flex-col items-center">
            <div className="mb-2 w-[85%]">
              <img src={welcomeBack} alt="Welcome Logo" className="h-full w-full" />
            </div>
            <p className="w-[100%] text-center text-customGray font-lato font-[400] text-[14px] leading-[19.2px]">
              Welcome back! Please enter your details to continue
            </p>
          </div>
          
          {/* Form */}
          <form className="w-full h-[50%]">
            {/* Email Input */}
            <div className='mb-3'>
              <label htmlFor="email" className="block mb-3 text-black font-lato text-[16px] font-[400] leading-[19.2px]">
                Email address
              </label>
              <input
                type="email"
                id="email"
                
                className="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            
            {/* Password Input */}
            <div className='relative mb-8'>
              <div className='absolute top-0 right-0 flex items-center mx-2 cursor-pointer' onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <svg className="w-[20px] h-[20px] text-HideColor " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                ) : (
                  <svg className="w-[20px] h-[20px] text-HideColor " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
                <p className='text-HideColor pl-1'>{passwordVisible ? 'Hide' : 'Show'}</p>
              </div>
              <label htmlFor="password" className="block mb-3 text-black font-lato text-[16px] font-[400] leading-[19.2px]">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                
                className="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <a href="#" className="text-sm text-textColor font-inter text-[16px] font-[400] leading-[19.36px] hover:text-indigo-500 mt-3 mb-5 block text-left">
                Forget Password?
              </a>
            </div>
            
            {/* Sign In Button */}
            <div className="flex justify-center h-[11%]">
              <button type="submit" className="w-[60%] h-full font-lato font-[500] text-[16px] leading-[19.2px] bg-textColor text-white rounded-[10px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign In
              </button>
            </div>
          </form>
          
          {/* Footer */}
          <p className="text-center font-inter text-textColor font-[400] text-[10px] leading-[15.73px] tracking-[-0.05em]">
            Powered by <span className="font-[600] text-[15px] leading-[24.2px]">Dark MATTER</span>
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img className="object-cover w-full h-full" src={LoginImg} alt="Login" />
      </div>
    </div>
  );
};

export default Login2;
