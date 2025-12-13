import { useState } from "react";

export default function RecommendDishes() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const dishes = [
  { id: 1, name: "Phở Bò", price: "$15.90", img: "/images/pho.png" },
  { id: 2, name: "Bánh Mì Thịt", price: "$9.90", img: "/images/nem.png" },
  { id: 3, name: "Bún Bò Huế", price: "$16.90", img: "/images/pho.png" },
  { id: 4, name: "Cơm Tấm", price: "$14.90", img: "/images/nem.png" },
  { id: 5, name: "Gỏi Cuốn", price: "$8.90", img: "/images/phocuon.png" },
];
  const next = () => {
    if (index + visibleCount < dishes.length) {
      setIndex(index + 1);
    } else {
        setIndex(0);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
        setIndex(dishes.length - 3)
    }
  };

  return (
    <div className="bg-green-900 py-8">
      <h2 className="text-center text-4xl font-extrabold text-white mb-6">
        Recommended Dishes
      </h2>

      <div className="flex items-center justify-center gap-4">
        {/* Left button */}
        <button
          onClick={prev}
          className="text-white text-3xl px-3 hover:scale-110 transition"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="flex gap-6 overflow-hidden">
          {dishes.slice(index, index + visibleCount).map((dish) => (
            <div
              key={dish.id}
              className="w-56 bg-white rounded-xl shadow-lg border hover:scale-105 transition"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{dish.name}</h3>
                <p className="text-green-700 font-bold mt-1">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={next}
          className="text-white text-3xl px-3 hover:scale-110 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}