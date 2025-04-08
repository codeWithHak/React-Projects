import { useCallback, useEffect, useState, useRef } from "react";

function App() {

  console.log("Component mounted");
  
  const [length, setLength] = useState(8);
  const [isCharAllowed, setIsCharAllowed] = useState(true);
  const [isNumAllowed, setIsNumAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copyButton, setCopyButton] = useState(true)
  console.log("Before password generator");
  



  let inputRef = useRef(null)

  const copyToClipboard = useCallback(()=>{
    inputRef?.current.select()
    window.navigator.clipboard.writeText(password)
    if (document.activeElement === inputRef.current){
      setCopyButton(false)
    }
  },[password])

  const passwordGenerator = useCallback(() => {
    setCopyButton(true)
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*-_";
    console.log("Under pass gen outside loop");
    for (let i = 0; i < length; i++) {

      let randomNumber = Math.floor(Math.random() * str.length + 1);
      console.log("randomNumber: ",randomNumber);
      
      pass += str[randomNumber];
      console.log("st[randomNumber]: ", str[randomNumber]);
      
    }
    setPassword(pass);
    console.log('pass: ',pass);

  }, [length, isCharAllowed, isNumAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharAllowed, isNumAllowed]);

  const handleLength = (e)=>{
    setLength(e.target.value)
    console.log("e.target.value: ",e.target.value)
    
    // console.log(e.target.value);
    
  }
  return (
    <div className="bg-gray-950 w-full h-screen py-10">
      <div className="bg-blue-900 px-4 py-4 max-w-lg mx-auto rounded-md">
        <div className="flex justify-center text-white">
          <input
            type="text"
            value={password}
            placeholder="Passowrd"
            readOnly
            ref={inputRef}
            className="outline-none bg-white py-2 px-4 rounded text-gray-950 w-full"
          />
          {copyButton?
             <button className="bg-blue-800 px-2 py-2 rounded hover:bg-blue-900 cursor-pointer" onClick={copyToClipboard}>Copy</button>
             
             :
             <button className="bg-blue-800 px-2 py-2 rounded" onClick={copyToClipboard}>Copied</button>
             
             }
          
        </div>
        <div className="flex justify-between px-3 mt-4 text-white ">
          <div>
            <input
              type="range"
              // id="length"
              min='8'
              max='50'
              value={length}
              
              onChange={handleLength}
              className="cursor-pointer"
            />
            <label htmlFor="length">Length {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="numbers"
              defaultChecked={isNumAllowed}
              onChange={() => setIsNumAllowed(prev => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="characters"
              defaultChecked={isCharAllowed}
              onChange={() => setIsCharAllowed(prev => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
