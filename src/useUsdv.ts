import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program, Idl } from "@project-serum/anchor";
import idl from "./assets/idl.json";
import { useWallet } from "@solana/wallet-adapter-react";
import { useMemo } from "react";

const PROGRAM_ID = new PublicKey("G3Do6ZuHbZbEruQTwcwY5Vdu35JPnbLHpvaVEtviWwbR");
const NETWORK = "https://api.testnet.solana.com";

export const useUsdvContract = () => {
  const wallet = useWallet();
  const connection = new Connection(NETWORK);

  const provider = useMemo(() => {
    if (!wallet || !wallet.publicKey || !wallet.signTransaction) return null;
    return new AnchorProvider(connection, wallet as any, {
      commitment: "confirmed",
    });
  }, [wallet, connection]);

  const program = useMemo(() => {
    if (!provider) return null;
    return new Program(idl as Idl, PROGRAM_ID, provider);
  }, [provider]);

  const callMint = async () => {
    if (!program || !wallet.publicKey) {
      console.warn("Wallet not connected or program not ready.");
      return;
    }

    console.log("call mint with wallet", wallet.publicKey.toBase58());
    // const tx = await program.methods
    //   .mint(/* args */)
    //   .accounts({ authority: wallet.publicKey })
    //   .rpc();
    // console.log("TX", tx);
  };

  const callBurn = async () => {
    if (!program || !wallet.publicKey) {
      console.warn("Wallet not connected or program not ready.");
      return;
    }

    console.log("call redeem");
  };

  return { callMint, callBurn };
};
