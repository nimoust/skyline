import React from 'react'
import profil from '../images/profile.avif'

export default function Card(props){
    const data = [
        { id: 1, date: 'Dec 7, 2022', customerName: 'Kobe Bryant', amount: '120 DT', company: 'Spalding Company' },
        { id: 2, date: 'Dec 8, 2022', customerName: 'Michael Jordan', amount: '150 DT', company: 'Nike' },
        { id: 3, date: 'Dec 9, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
        // { id: 4, date: 'Dec 10, 2022', customerName: 'Kobe Bryant', amount: '120 DT', company: 'Spalding Company' },
        // { id: 5, date: 'Dec 11, 2022', customerName: 'Michael Jordan', amount: '150 DT', company: 'Nike' },
        // { id: 6, date: 'Dec 12, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
        // { id: 7, date: 'Dec 12, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
        // { id: 8, date: 'Dec 12, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
        // { id: 9, date: 'Dec 12, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
        // { id: 10, date: 'Dec 16, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
        
      ];
     console.log(data) 
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[800px] h-[580px] bg-white shadow-lg rounded-lg flex overflow-hidden">
                {/* Left Part */}
                <div className={`w-1/3 p-3 bg-${props.color} rounded-lg flex flex-col items-center`}>
                    <svg className="h-6 w-6 text-blue ml-auto " fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <img
                        src={profil}
                        alt="Profile"
                        className="w-[110px] h-[110px] rounded-full mb-6"
                    />
                    <h2 className="text-2xl font-semibold mb-2 text-white">Jhon Doe</h2>
                    <div className='rounded-full text-textColor font-semibold bg-blue2 w-[150px] h-[35px] flex items-center justify-center text-lg'>
                        Master
                    </div>
                    <div className="text-sm mt-12 ">
                        <p className="text-white mb-4 text-xs">Address : Los Angeles , Lakers</p>
                        <p className="text-white mb-4 text-xs">Phone: 53 545 515</p>
                        <p className="text-white mb-4 text-xs">Email: john.doe@gmail.com</p>
                        <p className="text-white mb-4 text-xs">Tea Size: <span className='text-black font-bold '>03</span></p>
                        <p className="text-white mb-4 text-xs">Supervisor: Owner</p>
                        <p className="text-white mb-4 text-xs">IBAN: XXX145XX14552</p>
                    </div>
                </div>
                {/* Right Part */}
                <div className="w-2/3  bg-bgGround rounded-r-lg ">
                    <div className="ml-[30px] p-4 bg-white rounded-lg h-full px-6">
                        {/* OverView Section */}
                        <div className="mb-[16px]">
                            <p className=" text-blue font-semibold mb-2 font-semibold text-2xl">Overview</p>
                            <div className="flex flex-col my-[30px] ">
                                <p className="mb-[8px] text-1xl text-perColor">40 % until the next point</p>
                                <div className="relative w-full bg-custombgOrange rounded-full h-4  ">
                                    <div
                                    className="bg-customOrange h-4 rounded-full"
                                    style={{ width: '40%' }} // Adjust percentage here
                                    ></div>
                                    <div className="absolute inset-0 flex justify-center items-center">
                                    {/* <span className="text-white font-semibold">40%</span> */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        {/* Revenue Section */}
                        <div className="mb-6">
                            <p className="text-xl font-semibold mb-2 text-blue">Revenue <span className=' text-gray-500 text-xs '>(Monthly)</span></p>
                            <p className='font-semibold mb-2  text-3xl text-blue ' >512.50 TND</p>
                            <p className='text-gray-500 flex flex-row '>Since last month <span className='mx-[7px] text-customred' >2.27%</span>  
                            <svg class="h-4 w-4 text-customred mt-[5px] "  width="24" height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="16" y1="15" x2="12" y2="19" />  <line x1="8" y1="15" x2="12" y2="19" /></svg>  
                            </p>
                        </div>
                        {/* Orders Table */}
                        <p className=" text-blue font-semibold mb-6 font-semibold text-2xl">Latest orders</p>
                       
                        <table className="min-w-full bg-white ">
                            <div className='h-[200px] overflow-auto  ' >
                                <tbody >
                                    <tr >
                                        <td className=" pl-10 bg-gray-100 text-base font-medium text-gray-800" colSpan="4"></td>
                                    </tr>
                                    {data.map((item) => (
                                        
                                        <tr key={item.id}>
                                            <td className="py-6 pl-6 border-b  font-medium text-blue text-xs">{item.date}</td>
                                            <td className="py-6 pl-11 border-b  font-medium text-blue text-xs">{item.customerName}</td>
                                            <td className="py-6 pl-11 border-b  font-extrabold text-blue text-xs">{item.amount}</td>
                                            <td className="py-6 pl-11 border-b  font-medium text-blue text-xs">{item.company}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </table>
                           
                    </div>
                </div>    
            </div>
        </div>
    )
}