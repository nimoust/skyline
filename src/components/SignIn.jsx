import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../images/login.png';
import Logo from '../images/skyline.png';
import vector from '../images/Vector.png';
import Password from '../images/Password.png';

const Login2 = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-white">
      {/* Image Section */}
      <div className="w-[53%] h-full">
        <img className="object-cover w-full h-full" src={LoginImg} alt="Login" />
      </div>  
      {/* Form Section */}
      <div className="w-[47%] flex justify-center items-center bg-white ">
        <div className="w-full h-full  flex flex-col items-center justify-center gap-10 ">
          {/* Logo */}
          <div className="w-[17%] h-[10.5%] mb-[40px]">
            <img src={Logo} alt="Company Logo" className="h-full w-full" />
          </div>
          <div className="text-center w-[61%] h-[8.5%]  flex justify-center flex-col items-center">
            <div className="mb-2 w-[92%]">
              <img src={Password} alt="Welcome Logo" className="h-full w-full" />
            </div>
            <p className="w-[100%] text-center text-customGray font-lato font-[400] text-[14px] leading-[19.2px]">
               Enter your Email and Phone Number so we can help you
            </p>
          </div>
          
          {/* Form */}
          <form className="w-[72%]  ">
            {/* Email Input */}
            <div className='mb-7 h-[30%]' >
              <label htmlFor="email" className="block mb-3 text-black font-lato text-[16px] font-[400] leading-[19.2px]">
                Email address
              </label>
              <input
                type="email"
                id="email"
                
                className="h-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            
            {/* Password Input */}
            <div className='mb-8 h-[30%]'>

              <label htmlFor="phone" className="block mb-3 text-black font-lato text-[16px] font-[400] leading-[19.2px]">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                className="h-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              /> 
            </div>
            
            {/* Sign In Button */}
            <div className="flex justify-center h-[15%]">
              <button type="submit" className="w-[60%] h-full font-lato font-[500] text-[16px] leading-[19.2px] bg-textColor text-white rounded-[10px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Submit
              </button>
            </div> 
          
          </form>
          <div className=" flex flex-row justify-center items-center hover:gap-2">
                <div className="w-[10px] h-[16px] flex items-center justify-center ">
                    <img className="w-full h-full "  src={vector} alt="vector" />
                </div>
                
                <Link to="/login" className="text-customGray ml-3 font-inter font-[500] text-[20px] leading-[24px]">Back to login</Link>
                 
            </div>
          {/* Footer */}
          <p className="mb-[-20px] mt-[40px] text-center font-inter text-textColor font-[400] text-[10px] leading-[15.73px] tracking-[-0.05em]">
            Powered by <span className="font-[600] text-[15px] leading-[24.2px]">Dark MATTER</span>
          </p>
            

        </div>
      </div>
      
      
    </div>
  );
};

export default Login2;
