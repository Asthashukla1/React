import { useState , useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIZKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     
    if (numbers) str += "0123456789"
    if (characters) str += "!@~$#%^&*()_+?{}[]"
  
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbers, characters])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, characters, numbers, passwordGenerator])

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-xl shadow-lg p-6 space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-pink-400">🔐 Password Generator</h1>

        <div className="flex items-center rounded-lg overflow-hidden border border-gray-600">
          <input 
            type="text"
            value={password}
            className="w-full px-4 py-2 text-lg bg-gray-900 text-green-400 outline-none"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-pink-600 hover:bg-pink-700 transition-colors px-4 py-2 text-white font-semibold"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-gray-300">Length: <span className="text-white font-medium">{length}</span></label>
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className="w-2/3 accent-pink-500 cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-300">Include Numbers</label>
            <input 
              type="checkbox"
              defaultChecked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
              className="w-5 h-5 accent-pink-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-300">Include Special Characters</label>
            <input 
              type="checkbox"
              defaultChecked={characters}
              onChange={() => setCharacters((prev) => !prev)}
              className="w-5 h-5 accent-pink-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
