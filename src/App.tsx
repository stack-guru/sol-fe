import { useState } from 'react'
import './App.css'
import { SolanaProvider } from './SolanaProvider'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <SolanaProvider>
      <h1>Solana Wallet Connection</h1>
      <WalletMultiButton />
    </SolanaProvider>
  )
}

export default App
