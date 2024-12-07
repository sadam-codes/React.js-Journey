import { useState } from "react";

function App() {
  const [color, changeColor] = useState("black");
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
          <button
            className="px-3 outline-none bg-red-950 text-white rounded"
            onClick={() => {
              changeColor("red");
            }}
          >
            Red
          </button>

          {/* black */}

          <button
            className="px-3 outline-none bg-black text-white rounded"
            onClick={() => {
              changeColor("black");
            }}
          >
            Black
          </button>
          {/* blue */}
          <button
            className="px-3 outline-none bg-blue-950 text-white rounded"
            onClick={() => {
              changeColor("blue");
            }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
