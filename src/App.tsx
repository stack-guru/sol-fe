import { useState } from 'react'
import './App.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useUsdvContract } from './useUsdv'

function App() {
  // const [count, setCount] = useState(0)
  const { callMint, callBurn } = useUsdvContract();

  const handleMint = async () => {
    // callMint()
  }

  const handleBurn = async () => {
    callBurn()
  }

  return (
    <>
      <h1>Solana Wallet Connection</h1>
      <WalletMultiButton />

      <div className='btn-group'>
        <button onClick={() => handleMint()}>Mint</button>
        <button onClick={() => handleBurn()}>Redeem</button>
      </div>
    </>
  )
}

export default App
