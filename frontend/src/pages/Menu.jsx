import { CiSearch } from "react-icons/ci";

export default function Menu() {
    const categories =  ["Rice","Soup","Drinks","Dessert"]

    return (
    <div>
        <div className="flex justify-center mt-6">
            <div className="relative w-1/2">
                {/* Search bar*/}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
                    <CiSearch/>
                </span>
                <input 
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full
                focus:outline-none focus:ring-2 focus:ring-green-500"/>
            </div>
        </div>
        {/* Categories (Soup, Rice, Drinks, Dessert)*/}
        <div className="flex justify-center mt-4">
        {categories.map(category => (
            <div key={category}>
                <input type="radio" name="categoryGroup" id={category} className="hidden peer" />
                <label
                    htmlFor={category}
                    className="mx-3 text-xs block text-center cursor-pointer border border-black rounded-full
                                px-6 py-1 peer-checked:bg-gray-400 peer-checked:font-semibold peer-checked:text-gray-200
                                hover:bg-gray-400 hover:font-semibold hover:text-gray-200 shadow
                                transition-all duration-200"
                >
                    {category}
                </label>
            </div>
        ))}
        </div>

        
        <h1 className="text-3xl p-10">Menu Page</h1>
    </div>
    );
}