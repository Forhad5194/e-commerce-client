import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const footer = () => {
    return (
        <div className="container mx-auto p-4 text-center flex flex-col gap-2">
            <p>Copyright © 2024 - All right reserved by E-commerce Industries Ltd .</p>
            <div className="flex justify-center items-center gap-5 " >
                <a className="text-2xl" href="">
                    <FaFacebook className="hover:text-green-400" />

                </a>
                <a className="text-2xl" href="">
                    <FaInstagram className="hover:text-green-400" />
                </a>
                <a className="text-2xl" href="">
                    <CiLinkedin className="hover:text-green-400" />
                </a>
            </div>
        </div>
    );
};

export default footer;