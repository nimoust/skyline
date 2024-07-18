import React, { useState } from 'react';
import profil from '../images/profile.avif'

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
            <button type="button" onClick={toggleCollapse1} className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b border-gray-200 focus:ring-4 focus:ring-gray-200" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <img
                    src={profil}
                    alt="Profile"
                    className="w-[40px] h-[40px] rounded-full"
                />
                <div className="flex flex-row flex-start gap-[300px] flex-1 mx-5">
                    <div className="py-2 font-medium text-blue-500 text-xs">Kobe Bryant <span>Master</span></div>
                    <div className="py-2 font-medium text-blue-500 text-xs">Team size : <span>06</span></div>
                    <div className="py-2 font-extrabold text-blue-500 text-xs">Created on: <span>13 Aug 2023</span></div>
                </div>
                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
        </h2>
        {/* Sous niveau 1 */}
        <div id="accordion-collapse-body-1" className={isOpen1 ? 'block' : 'hidden'} aria-labelledby="accordion-collapse-heading-1">
            <div className=" border-b border-gray-200">
                <div id="accordion-nested-collapse" data-accordion="collapse">
                    {/* Niveau 2 */}
                    <h2 id="accordion-nested-collapse-heading-1">
                        <button type="button" onClick={toggleCollapse2} className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border-b border-gray-200 focus:ring-4 focus:ring-gray-200 pl-10" data-accordion-target="#accordion-collapse-body-1"  aria-expanded="false" aria-controls="accordion-nested-collapse-body-1">
                            <img
                                src={profil}
                                alt="Profile"
                                className="w-[40px] h-[40px] rounded-full"
                            />
                            <div className="flex flex-row justify-between flex-1 mx-5">
                                <div className="py-2 font-medium text-blue-500 text-xs">Kobe Bryant <span>Master</span></div>
                                <div className="py-2 font-medium text-blue-500 text-xs">Team size : <span>06</span></div>
                                <div className="py-2 font-extrabold text-blue-500 text-xs">Created on: <span>13 Aug 2023</span></div>
                            </div>
                            <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>
                    {/* Sous niveau 2 */}
                    <div id="accordion-nested-collapse-body-2" className={isOpen2 ? 'block' : 'hidden'} aria-labelledby="accordion-nested-collapse-heading-2">
                        <div className="flex items-center justify-between w-full p-5 pl-16 border-b border-gray-200">
                            <img
                                src={profil}
                                alt="Profile"
                                className="w-[40px] h-[40px] rounded-full"
                            />
                            <div className="flex flex-row justify-between flex-1 mx-4">
                                <div className="py-2 font-medium text-blue-500 text-xs">Kobe Bryant <span>Master</span></div>
                                <div className="py-2 font-medium text-blue-500 text-xs">Team size : <span>06</span></div>
                                <div className="py-2 font-extrabold text-blue-500 text-xs">Created on: <span>13 Aug 2023</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


  );
};

// export default CollapsibleList;
