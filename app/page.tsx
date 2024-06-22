"use client";

import { DynamicWidget } from "../lib/dynamic";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useRouter } from 'next/navigation'

export default function Main() {
  const { primaryWallet, user } = useDynamicContext();
  const isConnected = primaryWallet?.connected;
  const router = useRouter()

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <img src="/logo.png" alt="logo" className="w-64" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-10 text-[#3D1677]">
          Smart wallet : The future of banking in your{" "}
          <span className="text-[#FC8854]">pocket</span>.
        </h1>

        <DynamicWidget />
      </div>
      {isConnected && (
        <div className="flex-col mt-16 items-center justify-center">
          <h1 className="text-4xl font-bold mb-10 justify-center text-[#3D1677]">
            {`Hello ${user?.firstName}`}
          </h1>
          <div className="flex justify-center">
              <button className="p-[3px] relative"  type="button" onClick={() => router.push("/onramp")}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-orange-500 rounded-lg" />
                <div className="px-8 py-2  bg-zinc-100 rounded-[6px]  relative group transition duration-200 text-[#3D1677] hover:bg-transparent hover:text-white">
                    Onramp
                 </div>
              </button>
          </div>
        </div>
      )}
    </div>
  );
}
