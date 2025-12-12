import {Link} from "react-router-dom";

export default function NavBar(){
     return (
        <div className="relative bg-green-700 py-5 flex justify-center">
            <div className="absolute left-20 -bottom-12 transform -translate-x-1/2 
                    flex items-center justify-center bg-white text-black font-bold
                    rounded-full w-35 h-32 shadow-xl text-xl border-4 border-green-700">
                MenuMentor
            </div>

            <nav className="flex gap-10 text-white font-medium text-lg">
                <Link to="/" className="hover:border border-black 
                hover:font-bold border border-green-700 p-3 
                transition duration-500">
                    Home 
                </Link>

                <Link to="/Menu" className="hover:border border-black 
                hover:font-bold border border-green-700 p-3 
                transition duration-500">
                    Menu
                </Link>

                <Link to="/Contact" className="hover:border border-black
                hover:font-bold border border-green-700 p-3 
                transition duration-500">
                    Contact
                </Link>
            </nav>
        </div>
     )
}