import logo from "../../assets/logo.png"
import Search from "../Search";


const Navbar = () => {
    return (
        <div className=" h-20 p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="h-full">
                    <div className="h-full flex justify-center items-center">
                        <a href="/">
                            <img className="hidden lg:block"
                             src={logo}
                                width={200}
                                height={100}
                                alt="logo" />
                                
                        </a>
                        <a href="">
                            <img src={logo}
                                width={300}
                                height={60}
                                alt="logo" 
                                className="lg:hidden"
                                />
                        </a>
                    </div>
                </div>
                {/* scerach input fuild  */}
                <div>
                    <Search />
                </div>

                {/* login and my cart area.  */}

                <div>
                    <h2>This is login </h2>
                </div>











            </div>{/* Logo */}

        </div>
    );
};

export default Navbar;