import React, { useState } from 'react';
import kobe from '../images/1.png'
import jordan from '../images/2.png'
import lebron from '../images/3.png'

export default function CollapsibleList () {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleCollapse1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleCollapse2 = () => {
    setIsOpen2(!isOpen2);
  };
 

  return (

    <div id="accordion-nested-parent" data-accordion="collapse" className="w-[1100px]">
        {/* Niveau 1 */}
        <h2 id="accordion-collapse-heading-1">
            <button type="button" onClick={toggleCollapse1} className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b border-gray-200 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <img
                    src={kobe}
                    alt="Profile"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="flex flex-row flex-start gap-[200px] flex-1 mx-5">
                    <div className="py-2 font-semibold text-blue3 text-base ">Kobe Bryant <span className="text-blue4 ml-3 font-normal">Master</span></div>
                    <div className="py-2 font-semibold text-blue3 text-base">Team size : <span className="text-blue4 ml-2 font-normal">06</span></div>
                    <div className="py-2 font-semibold text-blue3 text-base">Created on: <span className="text-blue4 ml-2 font-normal">13 Aug 2023</span></div>
                </div>
                <svg class="h-6 w-6 text-black mr-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg data-accordion-icon className={w-5 h-5 rotate-${isOpen1 ? '0' : '180'} shrink-0 text-black} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5 5 1 1 5"/>
                </svg>

            </button>
        </h2>
        {/* Sous niveau 1 */}
        <div id="accordion-collapse-body-1" className={isOpen1 ? 'block' : 'hidden'} aria-labelledby="accordion-collapse-heading-1">
            <div className=" border-b border-gray-200">
                <div id="accordion-nested-collapse" data-accordion="collapse">
                    {/* Niveau 2 */}
                    <h2 id="accordion-nested-collapse-heading-1">
                        <button type="button" onClick={toggleCollapse2} className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b border-gray-200  pl-10" data-accordion-target="#accordion-collapse-body-1"  aria-expanded="false" aria-controls="accordion-nested-collapse-body-1">
                            <img
                                src={jordan}
                                alt="Profile"
                                className="w-[40px] h-[40px] rounded-full object-cover"
                            />
                            <div className="flex flex-row flex-start gap-[200px] flex-1 mx-5">
                                <div className="py-2 font-semibold text-blue3 text-base">Foulen Lghali <span className="text-green ml-3 font-normal">Team leader</span></div>
                                <div className="py-2 font-semibold text-blue3 text-base">Team size : <span className="text-green ml-2 font-normal">03</span></div>
                                <div className="py-2 font-semibold text-blue3 text-base">Created on: <span className="text-green ml-2 font-normal">13 Aug 2023</span></div>
                            </div>
                            <svg class="h-6 w-6 text-black mr-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                            <svg data-accordion-icon className={w-5 h-5 rotate-${isOpen2 ? '0' : '180'} shrink-0 text-black} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5 5 1 1 5"/>
                            </svg>

                        </button>
                    </h2>
                    {/* Sous niveau 2 */}
                    <div id="accordion-nested-collapse-body-2" className={isOpen2 ? 'block' : 'hidden'} aria-labelledby="accordion-nested-collapse-heading-2">
                        <div className="flex items-center justify-between w-full p-5 pl-16 border-b border-gray-200">
                            <img
                                src={lebron}
                                alt="Profile"
                                className="w-[40px] h-[40px] rounded-full"
                            />
                            <div className="flex flex-row flex-start gap-[300px] flex-1 mx-5">
                                <div className="py-2 font-semibold text-blue3 text-base">Foulen Lghali <span className="text-orange ml-3 font-normal">Agent</span></div>
                                <div className="py-2 font-semibold text-blue3 text-base">Created on: <span className="text-orange ml-3 font-normal">13 Aug 2023</span></div>
                            </div>
                            
                            <svg class="h-6 w-6 text-black mr-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  );
};