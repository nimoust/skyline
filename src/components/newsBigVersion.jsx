import newProduct from '../images/newProduct.webp';

export default function NewsBigVersion() {
    return (
        
        <div className="w-full h-full  max-w-[1090px] min-h-[678px] flex flex-col justify-center items-center text-center bg-white rounded-[12px] shadow hover:bg-gray-100">
            <div className="w-full h-[300px] flex justify-center bg-customYellow">
                <img className="object-cover h-full" src={newProduct} alt="Product" />
            </div>
            <div className="w-full flex flex-col justify-between leading-normal text-[16px] flex-1">
                <div className="flex flex-col justify-center items-center text-center p-6">
                    <h5 className="mb-12 text-black font-lato font-[700] text-[40px] leading-[48px]">TITLE</h5>
                    <p className="max-w-[855px] mb-8 text-black font-lato text-[16px] font-[300] leading-[19.2px]">
                        Dribbble Holdings Limited (the “Dribbble Group”) is comprised of several companies, which together provide tools to help the world’s designers to create, develop and promote their talents (each a “Service” and collectively, the “Services”). The companies within the Dribbble Group each act as the data controller for personal data processed in respect of their Services (each a “Group Company” and together the “Group Companies”) and referred to as “our,” “we,” or “us” below.
                    </p>
                    <p className="max-w-[855px] text-black font-lato text-[16px] font-[300] leading-[19.2px]">
                        Dribbble Holdings Limited (the “Dribbble Group”) is comprised of several companies, which together provide tools to help the world’s designers to create, develop and promote their talents (each a “Service” and collectively, the “Services”). The companies within the Dribbble Group each act as the data controller for personal data processed in respect of their Services (each a “Group Company” and together the “Group Companies”) and referred to as “our,” “we,” or “us” below.
                    </p>
                </div>
                <p className="font-[400] font-inter text-customGray text-[16px] leading-[19.36px] self-end px-6 pb-4">
                    20/05/2023
                </p>
            </div>
        </div>
    
    );
}
