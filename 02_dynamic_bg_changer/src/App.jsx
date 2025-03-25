import { useState } from "react";
function App() {

  // a state to store color
  const [color, setColor] = useState("green");

  // function that will change color
  const changeBgColor = (e) => {
    
    // storing textContent in a variable so i dont have to rewrite it everytime
    // some names would have a space e.g: Light Blue so i'm also checking for that edgecase by using split and join
    let text = e.target.textContent.split(" ").join("")
    console.log("Change color button clicked Outer");

    // set the text i got from btn as a bgColor 
    setColor(text);
    console.log("text:" ,text);
    
  };

  return (
    <div
      // setting bg color with custom css and adding the color state as bgColor
      style={{ backgroundColor: color }}
      className={`w-full h-screen flex items-end justify-center`}
    >
      <div className="px-8 py-3 rounded-full bg-white flex gap-4 mb-6 flex-wrap w-[90%] mx-auto sm:w-auto justify-center">
        <button
          onClick={changeBgColor}
          className="btn bg-blue-600 px-2 py-2 rounded-xl text-white text-lg font-semibold cursor-pointer"
        >
          Blue
        </button>
        <button
          onClick={changeBgColor}
          className="btn bg-green-600 px-2 py-2 rounded-xl text-white text-lg font-semibold cursor-pointer"
        >
          Green
        </button>
        <button
          onClick={changeBgColor}
          className="btn bg-black px-2 py-2 rounded-xl text-white text-lg font-semibold cursor-pointer"
        >
          Black
        </button>
        <button
          onClick={changeBgColor}
          className="btn bg-blue-300 px-2 py-2 rounded-xl text-white text-lg font-semibold cursor-pointer"
        >
          Light Blue
        </button>
        <button
          onClick={changeBgColor}
          className="btn bg-orange-400 px-2 py-2 rounded-xl text-white text-lg font-semibold cursor-pointer"
        >
          Orange
        </button>
        <button
          onClick={changeBgColor}
          className="btn bg-gray-400 px-2 py-2 rounded-xl text-white text-lg font-semibold cursor-pointer"
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default App;
