
export default function Card({name, description, price, imagePath }) {
    return(
        <div className="rounded-2xl w-full bg-orange-100 p-4 shadow-md border border-orange-200 hover:shadow-lg transition">
            <img src={`https://qneudclzdklgiwxyszrs.supabase.co/storage/v1/object/public/images/${imagePath}`} alt={name}/>
            <div className="p-4">
                <h3 className="font-semibold text-xl">{name}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-green-600 font-bold mt-2">${price}</p>
            </div>
        </div>
    )
}