import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div>
      <header className="relative bg-green-700 p-5 flex justify-center">
          <div className="absolute left-20 -bottom-12 transform -translate-x-1/2 
                  flex items-center justify-center bg-white text-black font-bold
                  rounded-full w-35 h-32 shadow-xl text-xl border-4 border-green-700">
            MenuMentor
          </div>

        
        {/* Bar */}
        <div className="flex gap-10 text-white font-medium text-lg">
            <a href="#" className="hover:border border-black hover:text-black hover:bg-white border border-green-700 p-3 transition duration-500">Home</a>
            <a href="#" className="hover:border border-black hover:text-black hover:bg-white border border-green-700 p-3 transition duration-500">Menu</a>
            <a href="#" className="hover:border border-black hover:text-black hover:bg-white border border-green-700 p-3 transition duration-500">AI Recommender</a>
            <a href="#" className="hover:border border-black  hover:text-black hover:bg-white border border-green-700 p-3 transition duration-500">Contact</a>
        </div>
      </header>

      <div className="mt-20"></div>
    </div>
  );
}

export default App;
