import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AppFooter from './components/AppFooter'
import vector1 from './assets/Vector1.svg'
import vector2 from './assets/Vector2.svg'
import vector3 from './assets/Vector3.svg'

function App () {
  const [count, setCount] = useState(0)


  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)
    } else {
      console.log("No authorized account found")
    }
  }

  return (
    <div className="App ">
      <img className='absolute max-h-screen' src={vector1}></img>
      <img className='absolute w-full max-h-screen' src={vector2}></img>
      <img className='absolute top-0 right-0 w-96 h-96 ' src={vector3}></img>
      <div className="flex flex-col h-screen p-6 gap-y-3">
        {/* <div className='absolute inset-y-0 w-96 blur-[250px] vector1' ></div> */}
        {/* <div className='absolute top-0 right-0 w-96 h-96 blur-[250px]  bg-[#23DC57]' ></div> */}
        {/* <div className='absolute vector1'></div>*/}

        <div className="w-full h-full border border-black rounded-xl blur-none">

          <nav className="flex items-center justify-between px-12 py-6">
            <span className='flex items-center text-3xl text-white'><svg className='w-5 mr-6' viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.784 16.564L0.936 7.5V2.22L9.692 8.38V0.547998L22.54 9.568V14.804L13.784 8.644V16.564Z" fill="white" />
            </svg>
              ape id</span>
            <button className="px-5 py-2 text-base font-medium text-white bg-black rounded-3xl ">
              Get Started
            </button>
          </nav>
          <header className='px-12 text-left mt-28 sm:max-w-2xl'>
            <h2 className='text-4xl font-medium tracking-wider text-white sm:text-5xl'>The social end point </h2>
            <p className='max-w-sm mt-4 text-2xl tracking-wider text-white'>your metaverse activity.
              an unified social graph to own, build and make it</p>
            <button onClick={connectWallet} className='flex items-center px-6 py-4 mt-10 text-base font-medium tracking-wide text-white border border-white rounded-lg hover:text-gray-100 hover:border-gray-100'>CONNECT TO MINT
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </header>
        </div>

        <AppFooter />
      </div>
    </div>
  )
}

export default App
