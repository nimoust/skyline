import newProduct from '../images/newProduct.webp';

export default function News() {
    return (
        <div className=" max-w-[1236px] h-auto md:h-[222px] flex flex-col md:flex-row bg-white rounded-[12px] shadow m-4 hover:bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col justify-between py-5 px-7 leading-normal text-[16px]">
                <h5 className="mb-3 text-black font-lato font-[600] text-[24px] leading-[38.8px]">Skyline new Partner!</h5>
                <p className="w-full md:w-[860px] mb-10 text-black font-lato text-[16px] font-[300] leading-[19.2px]">
                    Dribbble Holdings Limited (the “Dribbble Group”) is comprised of several companies, which together provide tools to help the world’s designers to create, develop and promote their talents (each a “Service” and collectively, the “Services”). The companies within the Dribbble Group each act as the data controller for personal data processed in respect of their Services (each a “Group Company” and together the “Group Companies”) and referred to as “our,” “we,” or “us” below.
                </p>
                <p className="font-[400] self-end font-inter text-customGray text-[16px] leading-[19.36px]">
                    20/05/2023
                </p>
            </div>
            <div className="w-full md:w-[222px] h-[222px] md:h-auto rounded-b-[12px] md:rounded-none md:rounded-r-[12px] overflow-hidden">
                <img className="object-cover w-full h-full" src={newProduct} alt="Product" />
            </div>
        </div>
    );
}
