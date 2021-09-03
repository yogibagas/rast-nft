import React from "react";
import RastaInfo from "./CardElements/RastaInfo";
import FarmHarvest from "./CardElements/FarmHarvest";
import Wallet from "./CardElements/Wallet";
import FooterCardFarms from "./CardElements/FooterCardFarms";
import BinanceLogo from "../../../../../assets/Binance-Icon-Logo.svg";

export default function CardSection() {
  const item = {
    name: "M - RASTA 1",
    detail: {
      core: "Core",
      multiple: "35x",
      wallet: BinanceLogo,
      apr: "256.08",
      depositFee: "0",
      rastaEarned: "0",
      harvesLink: "/",
      unlockWalletLink: "/",
      stake: "Total Liquidity",
      value: "47,581",
      bscLink: "/",
    },
  };
  return (
    <div className="wrapper w-full flex flex-col items-center">
      <div className="flex flex-col mx-2 w-full">
        <div className="shadow-md p-2 md:p-8">
          <RastaInfo
            farmName={item.name}
            farmLeverage={item.detail.multiple}
            farmWallet={item.detail.wallet}
            farmApr={item.detail.apr}
          />
          <div className={" expanded md:block"}>
            <FarmHarvest
              farmEarned={item.detail.rastaEarned}
              depositFee={item.detail.depositFee}
              harvestLink={item.detail.harvestLink}
            />
            <Wallet farmWalletLink={item.detail.unlockWalletLink} />
            <FooterCardFarms
              farmStake={item.detail.stake}
              farmName={item.name}
              farmValue={item.detail.value}
              farmBscLink={item.detail.bscLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
