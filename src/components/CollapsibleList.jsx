import React, { useState } from 'react';
import Card from './Card'
import Modal from 'react-modal';

export default function CollapsibleList({ data = [] }) {
  const [openMaster, setOpenMaster] = useState(null);
  const [openTeamLeader, setOpenTeamLeader] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState(null);

  const openModal = (item) => {
    setItem(item)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };
  

  const toggleMaster = (index) => {
    setOpenMaster(openMaster === index ? null : index);
  };

  const toggleTeamLeader = (index) => {
    setOpenTeamLeader(openTeamLeader === index ? null : index);
  };

  return (
    <div id="accordion-nested-parent" data-accordion="collapse" className="max-w-[1050px]  h-[500px] m-5 overflow-y-auto scrollbar-custom">
      
      {data.map((master, masterIndex) => (
        <div key={masterIndex} className="mb-6  rounded-lg bg-white " >
          <button
            type="button"
            onClick={() => toggleMaster(masterIndex)}
            className={`flex items-center justify-between w-full p-4 hover:bg-gray-100 hover:shadow-md transition duration-200 font-medium text-gray-500 ${openMaster === masterIndex ? 'border-b border-gray-200' : ' '}`}
            data-accordion-target={`#accordion-collapse-body-${masterIndex}`}
            aria-expanded={openMaster === masterIndex}
            aria-controls={`accordion-collapse-body-${masterIndex}`}
          >
            <img
              src={master.image}
              alt="Profile"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <div className="flex flex-row flex-start gap-[200px] flex-1 mx-5">
              <div className="py-2 font-semibold text-blue3 text-base">
                {master.name} <span className="text-blue4 ml-3 font-semibold text-sm">{master.role}</span>
              </div>
              <div className="py-2 font-semibold text-blue3 text-base">
                Team size: <span className="text-blue4 ml-2 font-semibold text-sm">{master.teamSize}</span>
              </div>
              <div className="py-2 font-semibold text-blue3 text-base">
                Created on: <span className="text-blue4 ml-2 font-semibold text-sm">{master.createdOn}</span>
              </div>
            </div>
            <svg className="h-6 w-6 text-black mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor " onClick={() => openModal(master)} >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <svg
              data-accordion-icon
              className={`w-5 h-5 transform ${openMaster === masterIndex ? 'rotate-0' : 'rotate-180'} shrink-0 text-black`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5L5 1 1 5" />
            </svg>
          </button>

          <div
            id={`accordion-collapse-body-${masterIndex}`}
            className={openMaster === masterIndex ? 'block' : 'hidden'}
            aria-labelledby={`accordion-collapse-heading-${masterIndex}`}
          >
            <div className="border-b border-gray-200">
              <div id="accordion-nested-collapse" data-accordion="collapse">
                {master.teamLeaders.map((teamLeader, teamLeaderIndex) => (
                  <div key={teamLeaderIndex}>
                    <button
                      type="button"
                      onClick={() => toggleTeamLeader(`${masterIndex}-${teamLeaderIndex}`)}
                      className={`flex items-center justify-between hover:bg-gray-100 hover:shadow-md transition duration-200 w-full p-4 font-medium text-gray-500  pl-10 border-b border-gray-200 `}
                      data-accordion-target={`#accordion-nested-collapse-body-${masterIndex}-${teamLeaderIndex}`}
                      aria-expanded={openTeamLeader === `${masterIndex}-${teamLeaderIndex}`}
                      aria-controls={`accordion-nested-collapse-body-${masterIndex}-${teamLeaderIndex}`}
                    >
                      <img
                        src={teamLeader.image}
                        alt="Profile"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                      <div className="flex flex-row flex-start gap-[150px] flex-1 mx-5">
                        <div className="py-2 font-semibold text-blue3 text-base">
                          {teamLeader.name} <span className="text-green ml-3 font-semibold text-sm">{teamLeader.role}</span>
                        </div>
                        <div className="py-2 font-semibold text-blue3 text-base">
                          Team size: <span className="text-green ml-2 font-semibold text-sm">{teamLeader.teamSize}</span>
                        </div>
                        <div className="py-2 font-semibold text-blue3 text-base ">
                          Created on: <span className="text-green ml-2 font-semibold text-sm">{teamLeader.createdOn}</span>
                        </div>
                      </div>
                      <svg className="h-6 w-6 text-black mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"  onClick={() => openModal(teamLeader)}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <svg
                        data-accordion-icon
                        className={`w-5 h-5 transform ${openTeamLeader === `${masterIndex}-${teamLeaderIndex}` ? 'rotate-0' : 'rotate-180'} shrink-0 text-black`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5L5 1 1 5" />
                      </svg>
                    </button>

                    <div
                      id={`accordion-nested-collapse-body-${masterIndex}-${teamLeaderIndex}`}
                      className={openTeamLeader === `${masterIndex}-${teamLeaderIndex}` ? 'block' : 'hidden'}
                      aria-labelledby={`accordion-nested-collapse-heading-${masterIndex}-${teamLeaderIndex}`}
                    >
                      {teamLeader.agents.map((agent, agentIndex) => (
                        <div key={agentIndex} className="flex items-center justify-between  hover:bg-gray-100 hover:shadow-md transition duration-200 w-full p-4 pl-16 border-b border-gray-200">
                          <img
                            src={agent.image}
                            alt="Profile"
                            className="w-[40px] h-[40px] rounded-full"
                          />
                          <div className="flex flex-row flex-start gap-[300px] flex-1 mx-5 ">
                            <div className="py-2 font-semibold text-blue3 text-base">
                              {agent.name} <span className="text-orange ml-3 font-semibold text-sm">{agent.role}</span>
                            </div>
                            <div className="py-2 font-semibold text-blue3 text-base">
                              Created on: <span className="text-orange ml-3 font-semibold text-sm">{agent.createdOn}</span>
                            </div>
                          </div>
                          <svg className="h-6 w-6 text-black mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor "  onClick={() => openModal(agent)}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Card Modal"
        className="fixed inset-0 flex items-center justify-center rounded-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >   
        <Card  closeModal={closeModal} item={item} />
      </Modal >
    </div>
  );
}
