import { BsCart3 } from "react-icons/bs";



const Navbar = () => {
    return (
        <div className=" h-20 static top-2  shadow-lg">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                    </div>
                    <div className="flex">
                        <a href="" className=" ml-5">
                            <p className="text-3xl text-yellow-400 font-bold uppercase flex">Blink <p className="text-3xl text-green-500 font-bold">IT</p></p>

                        </a>
                        <div className="divider divider-horizontal h-[50px]"></div>

                        <div>
                            <h2 className="font-bold text-2xl">Delivery in 8 minutes</h2>
                            <p>Dhaka Village, Mukherjee Nagar</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center  hidden lg:flex ">
                    <input type="text" placeholder="Search Your Need " className="input input-bordered w-[600px]" />
                </div>



                <div className="navbar-end">
                    <h2 className="p-10 font-medium text-xl" >Login</h2>
                     <div className="flex justify-center items-center bg-green-500 rounded-lg w-[150px] h-[60px]">
                        <BsCart3  className="text-3xl text-white" />
                         <p className="text-xl text-white font-bold ml-2">My Cart</p>
    
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;