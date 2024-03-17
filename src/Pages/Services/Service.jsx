import { FaArrowRight } from "react-icons/fa";

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="border-2 p-3 rounded-xl">
            <img className="rounded-xl h-[280px] mb-2" src={img} alt="" />
            <p className="text-[20px] font-bold">{title}</p>
            <div className="font-bold flex justify-between items-center mt-2 text-orange-600">
                <p>Price : ${price}</p>
                <FaArrowRight />
            </div>
        </div>
    );
};

export default Service;
