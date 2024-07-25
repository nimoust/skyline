import React from 'react';
import LoginImg from '../images/login.png'
import Logo from '../images/skyline.png'
import welcomeBack from '../images/welcomeBack.png'
const Login = () => {
  return (
    <div className="w-[1680px] h-[1024px] flex flex-row bg-white ">
      
      
      {/* Form Section */}
      <div className="w-1/2 flex  justify-center self-end  bg-white">
        <div className="w-[670px] h-[920px] flex items-center justify-around  flex-col ">
          {/* Logo */}
          <div className=" mb-5 w-[175px] h-[130px]">
                <img src={Logo} alt="Company Logo" className="h-full w-full " />
            </div>
          <div className=" " >
            
            <div className="mb-2 w-[383px] h-[53.63]">
                <img src={welcomeBack} alt="Welcome Logo" className="h-full w-full" />
            </div>
            <p className="text-center text-customGray font-lato font-[400] text-[16px]  leading-[19.2px] ">Welcome back ! Please enter your details to continue</p>
          </div>
          
          
          
          {/* Form */}
          <form className="w-[580px] h-[229px] mb-[150px] ">
            {/* Email Input */}
            <div className='mb-3'>
              <label htmlFor="email" class="block mb-3 text-black font-lato text-[16px] font-[400] leading-[19.2px] ">Email address</label>
              <input type="email" id="email" class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
            </div>
            
            {/* Password Input */}
            <div className='relative mb-8'>
                <div className='absolute top-0 right-0 p-1 flex flex-row mx-2'>
                    <svg class="h-6 w-6 text-HideColor font-lato font-[400] text-[18px] leading-[21.6px] mx-2 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    <p className='text-HideColor'>Hide</p>
                </div>
                <label htmlFor="password" class="block mb-3 text-black font-lato text-[16px] font-[400] leading-[19.2px] ">Password</label>
                <input type="password" id="password" class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " />
                <a href="#" className="text-sm text-textColor font-inter text-[16px] font-[400] leading-[19.36px] hover:text-indigo-500 mt-3 mb-5 block text-left ">Forget Password ?</a>
            </div>
            
            {/* Sign In Button */}
            <div className=' flex justify-center'>
              <button type="submit" className="w-[360px] h-[45px]  font-lato font-[500] text-[16px] leading-[19.2px]  bg-textColor text-white  rounded-[10px]  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign In
              </button>
            </div>
          </form>
          
          {/* Footer */}
          <p className="text-center font-inter  text-textColor font-[400] text-[13px] leading-[15.73px] tracking-[-0.05em]">Powered by <span className='font-[600] text-[20px] leading-[24.2px]'>Dark MATTER</span> </p>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-1/2 bg-cover bg-center" >
            <img className="object-cover w-full h-full" src={LoginImg} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
