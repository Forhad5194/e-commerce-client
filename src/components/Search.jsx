import { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Search = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [isSearchPage, setIsSearchPage] = useState();

    useEffect(() => {
        const isSearch = location.pathname === '/search'
        setIsSearchPage(isSearch)
    }, [location])

    console.log('location', location);

    const redirectToSearch = () => {
        navigate('/search')
    }


















    return (
        <div className=" w-full min-w-[300px] lg:max-w-full h-12 rounded-lg border overflow-hidden flex items-center  text-neutral-700  bg-slate-50 group focus-within:border-yellow-400">
            <button className="flex justify-center items-center p-4 h-full group-focus-within:text-yellow-400">
                <LuSearch size={22} />
            </button>
            <div className="w-full h-full">
                {
                    !isSearchPage ? (
                        <div onClick={redirectToSearch} className=" w-full h-full flex items-center">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Search "Milk"',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Search "Brand"',
                                    1000,
                                    'Search "Suger"',
                                    1000,
                                    'Search "Panner"',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}

                                repeat={Infinity}
                            />
                        </div>
                    ) : (
                        <div className=" h-full">
                            <input
                            type="text"
                            placeholder="Search your Product"
                            autoFocus={true}
                            className="w-full h-full outline-none"
                        />
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Search;