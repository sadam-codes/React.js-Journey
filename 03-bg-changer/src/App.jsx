import { useState } from "react";

function App() {
  const [bgcolor, changeBgColor] = useState("black");
  return (
    <div className="w-full h-screen" style={{ background: bgcolor }}>
      <div className="flex flex-wrap justify-center inset-x-0 px-2 py-5">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white">
          {/* Red */}
          <button
            className="px-3 outline-none bg-red-950 text-white rounded-3xl"
            onClick={() => {
              changeBgColor("red");
            }}
          >
            Red
          </button>

          {/* black */}

          <button
            className="px-3 outline-none bg-black text-white rounded-3xl"
            onClick={() => {
              changeBgColor("black");
            }}
          >
            Black
          </button>

          {/* blue */}
          <button
            className="px-3 outline-none bg-blue-950 text-white rounded-3xl"
            onClick={() => {
              changeBgColor("blue");
            }}
          >
            Blue
          </button>

          {/* yellow */}
          <button
            className="px-3 outline-none bg-yellow-950 text-white rounded-3xl"
            onClick={() => {
              changeBgColor("yellow");
            }}
          >
            Yellow
          </button>

          {/* purple */}
          <button
            className="px-3 outline-none bg-purple-950 text-white rounded-3xl"
            onClick={() => {
              changeBgColor("purple");
            }}
          >
            Purple
          </button>
          {/* white */}

          <button
            className="px-3 outline-none bg-black text-slate-200 rounded-3xl"
            onClick={() => {
              changeBgColor("white");
            }}
          >
            White
          </button>
          {/* green */}
          <button
            className="px-3 outline-none bg-green-950 text-white rounded-3xl"
            onClick={() => {
              changeBgColor("green");
            }}
          >
            Green
          </button>

          <button
            className="px-3 outline-none bg-green-950 text-white rounded-3xl"
            onClick={() => {
              changeBgColor("brown");
            }}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
