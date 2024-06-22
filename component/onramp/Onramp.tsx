"use client"

/* eslint-disable no-useless-concat */

import React from "react";
import { GateFiDisplayModeEnum, GateFiSDK, GateFiLangEnum } from "@gatefi/js-sdk";
import { FC, useRef, useEffect, useState } from "react";
import crypto from "crypto";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";



const Onramp: FC = () => {
  const overlayInstanceSDK = useRef<GateFiSDK | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { primaryWallet, user } = useDynamicContext();
  const address = primaryWallet?.address;
  const userEmail = user?.email;
  useEffect(() => {
    console.log(overlayInstanceSDK)
    return () => {
      overlayInstanceSDK.current?.destroy();
      overlayInstanceSDK.current = null;
    };
  }, [isOverlayVisible]);



  const handleOnClick = () => {
    if (overlayInstanceSDK.current) {
      if (isOverlayVisible) {
        overlayInstanceSDK.current.hide();
        setIsOverlayVisible(false);
      } else {
        overlayInstanceSDK.current.show();
        setIsOverlayVisible(true);
      }
    } else {
      const randomString = crypto.randomBytes(32).toString("hex");
      console.log(randomString )
      console.log(process.env.NEXT_PUBLIC_UNLIMIT_MERCHANTID)
      overlayInstanceSDK.current = new GateFiSDK({
        merchantId: `${process.env.NEXT_PUBLIC_UNLIMIT_MERCHANTID}`,
        displayMode: GateFiDisplayModeEnum.Overlay,
        nodeSelector: "#overlay-button",
        lang: GateFiLangEnum.en_US,
        isSandbox: true,
        successUrl:"https://www.crypto.unlimit.com/",
        walletAddress: address,
        email: userEmail,
        externalId: randomString,
        defaultFiat: {
          currency: "USD",
          amount: "20",
        },
        defaultCrypto: {
          currency: "USDT-BEP20",
        },
      });
    }
    overlayInstanceSDK.current?.show();
    setIsOverlayVisible(true);
  };

  return (

            <div className="flex justify-center ">
                    <button id="overlay-button" className="p-[3px] relative"  type="button" onClick={handleOnClick}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-orange-500 rounded-lg" />
                        <div className="px-8 py-2  bg-zinc-100 rounded-[6px]  relative group transition duration-200 text-[#3D1677] hover:bg-transparent hover:text-white">
                            Onramp
                        </div>
                    </button>
            </div>
    )
        
} 
        
export default Onramp;