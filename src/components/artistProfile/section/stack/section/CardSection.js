import React, {useState} from "react";
import RastaInfo from "./CardElements/RastaInfo";
import FarmHarvest from "./CardElements/FarmHarvest";
import Wallet from "./CardElements/Wallet";
import FooterCardFarms from "./CardElements/FooterCardFarms";
import BinanceLogo from "../../../../../assets/Binance-Icon-Logo.svg";
import DataBank from "../../../../DataBank";

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
  const initialWallet = DataBank.walletConnected.status
  const [walletStatus, setWalletStatus] = useState(initialWallet)
  
  function changeWallet(){
    setWalletStatus(!walletStatus);
  }

  return (
    <div className="wrapper w-full flex flex-col items-center">
      <div className="flex flex-col mx-2 w-full">
        <div className="border-2 border-green-rasta rounded-md p-2 md:p-8">
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
              walletStatus={walletStatus}
              handleWallet={changeWallet}
            />
            <Wallet farmWalletLink={item.detail.unlockWalletLink}  
              walletStatus={walletStatus}
              handleWallet={changeWallet} />
            <FooterCardFarms
              farmStake={item.detail.stake}
              farmName={item.name}
              farmValue={item.detail.value}
              farmBscLink={item.detail.bscLink}
              walletStatus={walletStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
