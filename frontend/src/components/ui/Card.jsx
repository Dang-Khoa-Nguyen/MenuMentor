
export default function Card({key, name, description, price, imagePath }) {
    return(
        <div key={key} className="rounded-lg w-full  px-6 h-80 border border-black">
            <img src={`https://qneudclzdklgiwxyszrs.supabase.co/storage/v1/object/public/images/${imagePath}`}/>
            <div>
                <h3 className="text-cente"> {name} </h3>
                <p> description: {description} </p>
                <p> ${price} </p>
            </div>
        </div>
    )
}