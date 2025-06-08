import "./App.css";

function App() {
  return (
    <div className="flex w-full h-[1100px] justify-center ">
      <nav className="w-full h-10 bg-amber-800 flex items-center ">
        <ul className="flex gap-6 justify-center sticky top-0  w-full text-white ">
          <li className="cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer">
            <a href="#privacy">Privacy</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
