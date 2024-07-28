import React from 'react';
import Attach from '../images/Attach.png';
import { useState } from 'react';
import lebron from '../images/3.jpg';
const HelpPopup = ({ onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-[60%] h-[85%] rounded-lg   flex  flex-col items-center justify-center gap-5">
        {/* Header */}
        <div className="w-[89%]">
          <div>
            <h2 className="text-Blue2 font-lato font-[700] text-[24px] leading-[28.8px]">Need help?</h2>
            <p className="text-Blue3 font-lato font-[400] text-[14px] leading-[16.8px] mt-2">
              Fill the next form and let us know how we can help you.
            </p>
          </div>
        </div>

                
        <form className='w-[89%] h-[65%]  '>
            <div class="w-full h-full mb-4 border border-gray-200 rounded-[10px] border border-1px border-bgGray ">
                {/* nav */}
                <div class="w-full h-[18%] pl-5 flex flex-wrap border border-gray-200 items-center flex-start gap-3 rounded-[10px]">
                <select
                    className="w-[24%] h-[50%] flex mr-4 px-2 bg-customBlue  rounded-lg className='font-lato font-[400] text-[14px] leading-[16.8px]'" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    >
                    
                    <option value="subject1" className='font-lato font-[400] text-[14px] leading-[16.8px]' >
                        <span className='flex flex-row'>
                            <img src={lebron} alt="Profile" className="w-[10px] h-[10px] rounded-full inline" />
                            Subject 1
                        </span>
                    </option>
                    <option value="subject2" className='font-lato font-[400] text-[14px] leading-[16.8px]'>
                        <img src={lebron} alt="Profile" className="w-[10px] h-[10px] rounded-full inline" />
                        Subject 2
                    </option>
                </select>

                    <div className='w-[35%] h-[50%] flex flex-row font-lato font-[600] text-[16px] leading-[19.2px]'>
                        <p className='flex items-center pr-2 '>Object : </p>
                        <select
                            className="h-full  w-[75%] px-2  rounded-lg border border-gray-200 className='font-lato font-[400] text-[14px] leading-[16.8px]'"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="" disabled>
                            Select a subject
                            </option>
                            <option value="subject1">Subject 1</option>
                            <option value="subject2">Subject 2</option>
                        </select>
                    </div>
                    <button
                        type="button"
                        className="flex flex-row justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                        >
                        <label className="flex flex-row items-center cursor-pointer">
                            <img className="" src={Attach} alt="Attach" />
                            <span className="sr-only font-lato font-[400] text-[14px] leading-[16.8px]">Attach file</span>
                            <p className="ml-2">Attach files</p>
                            <input
                            type="file"
                            className="hidden"
                            onChange={(e) => console.log(e.target.files)}
                            />
                        </label>
                    </button>
                </div>     
                                              
                <div class="px-4 py-2 bg-white rounded-b-lg ">
                    <p className='px-5 mt-3 font-lato font-[600] text-[16px] leading-[19.2px]'>Message</p>
                    <label for="editor" class="sr-only ">Publish post</label>
                    <textarea id="editor"  class="block w-full  text-sm text-gray-800 bg-white border-0 p-5  " placeholder="Type your message" required ></textarea>
                </div> 
            </div>
            {/* Footer with Buttons */}
           
        </form>
        <div className="flex justify-end space-x-4 w-[89%] ">
            <button
                
                className="w-[120px] h-[35px]   bg-bgButton border border-border border-[1px] text-gray-700 rounded-lg -[21.6px] font-lato"
                onClick={onClose}
            >
                Cancel
            </button>
            <button type="submit" className="w-[120px] h-[35px] bg-Blue2 text-white rounded-lg font-[500] text-[18px] leading-[21.6px] font-lato">
                Send
            </button>
            </div>


        
      </div>
    </div>
  );
};

export default HelpPopup;
