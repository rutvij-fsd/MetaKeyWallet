'use client'

import { DynamicWidget } from "../lib/dynamic";
import {
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";


export default function Main() {
  const { primaryWallet , user} = useDynamicContext();
  const isConnected= primaryWallet?.connected;


  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-64" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-10 text-[#3D1677]">Smart wallet : The future of banking in your <span className="text-[#FC8854]">pocket</span>.</h1>

        <DynamicWidget />
      </div>
      {isConnected &&<div className="flex mt-16 space-x-4 ">
        <h1 className="text-4xl font-bold mb-10 text-[#3D1677]">S{`Hello ${user?.firstName}`}</h1>
      </div>}
    </div>
  );
}
