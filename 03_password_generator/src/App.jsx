import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [password, setPassword] = useState("");
  console.log("Before password generator");
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*-_";
    console.log("Under pass gen outside loop");
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * 1 + 1);
      pass += str[randomNumber];
      console.log("Random number: ", str[randomNumber]);
      
    }
    setPassword(pass);
    console.log(pass);

  }, [length, isCharAllowed, isNumAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, {length, isCharAllowed, isNumAllowed});

  return (
    <div className="bg-gray-950 w-full h-screen py-10">
      <div className="bg-blue-900 px-4 py-4 max-w-lg mx-auto rounded-md">
        <div className="flex justify-center text-white">
          <input
            type="text"
            value={password}
            placeholder="Passowrd"
            readOnly
            className="outline-none bg-white py-2 px-4 rounded text-gray-950 w-full"
          />
          <button className="bg-blue-800 px-2 py-2 rounded">copy</button>
        </div>
        <div className="flex justify-between px-3 mt-4 text-white">
          <div>
            <input
              type="range"
              id="length"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="numbers"
              defaultChecked={isNumAllowed}
              value={isNumAllowed}
              onChange={() => setIsNumAllowed(prev => !prev)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="characters"
              defaultChecked={isNumAllowed}
              value={isCharAllowed}
              onChange={() => setIsCharAllowed(prev => !prev)}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
