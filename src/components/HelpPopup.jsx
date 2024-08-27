import React from 'react';
import Attach from '../images/Attach.png';
import { useState } from 'react';
import lebron from '../images/3.jpg';
import kobe from '../images/1.jpg';
import jordan from '../images/2.jpg';
import blackVector from '../images/blackVector.png';
import whiteVector from '../images/whiteVector.png';
const HelpPopup = ({ onClose }) => {
    const options = [
        {
          value: 'subject1',
          name: 'Jhon Doe',
          role: 'Master',
          imgSrc: lebron,
        },
        {
          value: 'subject2',
          name: 'flen fouleni',
          role: 'Agent',
          imgSrc: kobe,
        },
        {
          value: 'subject2',
          name: 'ranim satouri',
          role: 'Team Leader',
          imgSrc: jordan,
        },
      ];  

      const emailSubjects = [
        {
          value: 'subject1',
          subject: 'Technical Support',
        },
        {
          value: 'subject2',
          subject: 'Billing Inquiry',
        },
        {
          value: 'subject3',
          subject: 'General Question',
        },
      ];
        
    
    const [message, setMessage] = useState('');
    const [selectedPerson, setSelectedPerson] = useState(options[0]);
    const [selectedEmailSubject, setSelectedEmailSubject] = useState(emailSubjects[0]);
    const [isPersonDropdownOpen, setIsPersonDropdownOpen] = useState(false);
    const [isEmailSubjectDropdownOpen, setIsEmailSubjectDropdownOpen] = useState(false);
    const [files, setFiles] = useState([]);
    const handlePersonOptionClick = (option) => {
        setSelectedPerson(option);
        setIsPersonDropdownOpen(false);
    };

    const handleEmailSubjectOptionClick = (option) => {
        setSelectedEmailSubject(option);
        setIsEmailSubjectDropdownOpen(false);
    };
    const handleSubmit = (e) => {
        console.log("hello")
        e.preventDefault();
        // Here you can send the data to your backend or perform any other action
       
        console.log('Message:', message);
        console.log('Selected Person:', selectedPerson);
        console.log('Selected Email Subject:', selectedEmailSubject);

        // Close the popup after submission
        // onClose();
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        console.log(selectedFiles); 
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <form onSubmit={handleSubmit} className="bg-white w-[60%] h-[85%] rounded-lg   flex  flex-col items-center justify-center gap-7">
                {/* Header */}
                <div className="w-[89%] ">
                    <div>
                        <h2 className="text-Blue2 font-lato font-[700] text-[24px] leading-[28.8px]">Need help?</h2>
                        <p className="text-Blue3 font-lato font-[400] text-[14px] leading-[16.8px] mt-2">
                        Fill the next form and let us know how we can help you.
                        </p>
                    </div>
                </div>

                        
                <div  className='w-[89%] h-[65%]  '>
                    <div class="w-full h-full mb-4  rounded-[10px] border border-1px border-bgGray ">
                        {/* nav */}
                        <div class="w-full h-fill py-3 pl-5 flex flex-wrap border-b border-gray-200 items-center flex-start gap-3 rounded-[10px]">
                            <div className="min-w-[28%] h-[55%] relative inline-block ">
                                <div
                                    className={`w-full px-4 py-1 flex items-center justify-between gap-3 text-left bg-${selectedPerson.role === 'Master' ? "customBlue" : selectedPerson.role === 'Team Leader'? "customGreen" : "customOrange" }  rounded-lg shadow-sm focus:outline-none`}
                                    onClick={() => setIsPersonDropdownOpen(!isPersonDropdownOpen)}
                                >
                                    
                                    <div className="flex items-center">
                                        <img src={selectedPerson.imgSrc} alt={selectedPerson.label} className="w-6 h-6 rounded-full mr-2" />
                                        <span className='text-white font-lato font-[400] text-[14px] leading-[16.8px]'>{selectedPerson.name} - {selectedPerson.role}</span>
                                        
                                    </div>
                                    <div>
                                        <img src={whiteVector} alt="vector" className="w-4 h-4 " />
                                    </div>
                                    
                                </div>

                                {isPersonDropdownOpen && (
                                    <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                        {options.map((option) => (
                                            <li
                                            key={option.value}
                                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handlePersonOptionClick(option)}
                                            >
                                            <img src={option.imgSrc} alt={option.label} className="w-6 h-6 rounded-full mr-2" />
                                            <span className=' font-lato font-[400] text-[14px] leading-[16.8px]'>{option.name} - {option.role}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <p className='flex items-center font-lato font-[600] text-[16px] leading-[19.2px] '>Object : </p> 
                            <div className='w-[28%] h-[50%] relative inline-block   font-lato font-[600] text-[16px] leading-[19.2px]'> 
                                <div
                                    className="w-full px-4 flex items-center justify-between py-[7px] text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                                    onClick={() => setIsEmailSubjectDropdownOpen(!isEmailSubjectDropdownOpen)}
                                >
                                    <span className=' font-lato font-[400] text-[14px] leading-[16.8px]'>{selectedEmailSubject.subject}</span>
                                    <div>
                                        <img src={blackVector} alt="vector" className="w-4 h-4 " />
                                    </div>
                                </div>

                                {isEmailSubjectDropdownOpen && (
                                    <ul className="absolute  w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    {emailSubjects.map((subject) => (
                                        <li
                                            key={subject.value}
                                            className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleEmailSubjectOptionClick(subject)}
                                        >
                                        
                                        <span className=' font-lato font-[400] text-[14px] leading-[16.8px]'>{subject.subject}</span>
                                        
                                        </li>
                                    ))}
                                    </ul>
                                )}
                            </div>
                            <button
                                type="button"
                                className="w-[15%] flex flex-row justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                                >
                                <label className="flex flex-row items-center cursor-pointer">
                                    <img className="" src={Attach} alt="Attach" />
                                    <span className="sr-only font-lato font-[400] text-[14px] leading-[16.8px]">Attach file</span>
                                    <p className="ml-2">Attach files</p>
                                    <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    />
                                </label>
                            </button>
                        </div>     
                                                    
                        <div class="px-4 py-2 bg-white rounded-b-lg h-[83%] flex flex-col ">
                            <p className='px-5 mt-3 font-lato font-[600] text-[16px] leading-[19.2px]'>Message</p>
                            <textarea 
                                id="editor" 
                                class="block w-full flex-1 text-sm text-gray-800 bg-white border-0 p-5 focus:outline-none focus:ring-0" 
                                placeholder="Type your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} 
                                required>

                            </textarea>
                        </div>

                    </div>
                    {/* Footer with Buttons */}
                
                </div>
                <div className="flex justify-end space-x-4 w-[89%] ">
                    <button
                        
                        className="w-[122px] h-[35px] text-center   bg-bgButton border border-border border-[1px] text-gray-700 rounded-lg leading-[21.6px] font-lato"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="w-[122px] h-[35px] text-center bg-Blue2  rounded-lg  text-white font-[500] hover:bg-blue-800 focus:outline-none  text-[18px]  font-lato">
                        Send
                    </button>
                </div>    
            </form>
        </div>
    );
    };

export default HelpPopup;