"use client";

import Onramp from "@/app/components/onramp/Onramp"
import { DynamicWidget } from "../lib/dynamic";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
// import { useRouter } from 'next/navigation'

export default function Main() {
  const { primaryWallet, user } = useDynamicContext();
  const isConnected = primaryWallet?.connected;
  // const router = useRouter()

  return (
    <div className="min-h-screen bg-zinc-300 flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center mb-5">
        <img src="/starkhack.svg" className="w-32"/>
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-64" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-10 text-[#3D1677]">
          Smart wallet : The future of banking in your{" "}
          <span className="text-[#FC8854]">pocket</span>.
        </h1>
        
        <h1 className="text-xl font-bold mb-10 text-[#3D1677]">
              Powered by 
          <img src="/dynamiclogo.svg" className="ml-10 w-64" />
        </h1>
        

        <DynamicWidget />
      </div>
      {isConnected && (
        <Onramp/>
      )}
    </div>
  );
}
