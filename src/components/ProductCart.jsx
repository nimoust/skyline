import nike from '../images/nike.jpg';

export default function ProductCart() {
    return (
        <div className="min-w-[594px] h-[313px] flex flex-col bg-white rounded-[12px] shadow md:flex-row md:max-w-[594px] hover:bg-gray-100 m-4">
            <div className="w-full md:w-1/2 h-[313px] md:h-auto rounded-t-[12px] md:rounded-none md:rounded-l-[12px] overflow-hidden">
                <img className="object-cover w-full h-full" src={nike} alt="Nike product" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-around p-6 leading-normal text-[16px]">
                <h5 className="text-black font-inter font-[800] text-[30px] leading-[36.31px]">NIKE</h5>
                <p className="mb-6 text-black font-lato text-[16px] font-normal leading-[19.2px]">
                    “Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment”
                </p>
                <p className="mb-6 font-[500] font-lato text-textColor text-[20px] leading-[24px]">
                    Communication rate : <span className="font-inter font-[700] leading-[24.2px] ml-1">10%</span>
                </p>
            </div>
        </div>
    );
}
