import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import Logo from "../assets/NFTRASTA.png";
import HeroImage from "../assets/lion-coin.png";
import CommunityImage from "../assets/community-lion.png";
import parse from "html-react-parser";
import MrRastaImage from "../assets/lion-mr-rasta.jpg";
import MrsRastaImage from "../assets/lion-mrs-rasta.jpg";
import BinanceLogo from "../assets/Binance-Icon-Logo.svg";
import AboutHeader from "../assets/aboutHero.jpg";
import BurdyProfile from "../assets/senor-burdy.png";
import EvoProfile from "../assets/senor-evo.png";
import BinanceWallet from "../assets/wallet/binance-wallet.png";
import MathWallet from "../assets/wallet/math-wallet.png";
import MetaMask from "../assets/wallet/meta-mask.png";
import TokenPocket from "../assets/wallet/token-pocket.png";
import TrustWallet from "../assets/wallet/trust-wallet.png";
import WalletConnect from "../assets/wallet/wallet-connect.png";
import ComingSoonImage from "../assets/coming-soon-image.png";
import NftComingSoonImage from "../assets/nft-coming-soon.png";

export default {
  wallet: [
    {
      name: "Metamask",
      icon: <MetaMask />,
      link: "#",
    },
    {
      name: "TrustWallet",
      icon: <TrustWallet />,
      link: "#",
    },
    {
      name: "MathWallet",
      icon: <MathWallet />,
      link: "#",
    },
    {
      name: "TokenPocket",
      icon: <TokenPocket />,
      link: "#",
    },
    {
      name: "WalletConnect",
      icon: <WalletConnect />,
      link: "#",
    },
    {
      name: "Binance Chain",
      icon: <BinanceWallet />,
      link: "#",
    },
  ],
  walletConnected : {
    status:false,
    walletDetails:false,
  },
  navbar: {
    logo: Logo,
    menu: [
      {
        label: "Launchpad NFTs",
        path: "/",
        parent: false,
        child: [],
      },
      {
        label: "Launchpad Artists",
        path: "/launchpad-artists",
        parent: false,
        child: [],
      },
    ],
    myProfileMenu: [],
  },
  homepage: {
    path: "/",
    banner: {
      title: parse(
        "Explore your Favorite Artist"
      ),
      desc: parse(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Mauris auctor massa vitae bibendum ornare. Quisque 
      venenatis sem a ligula volutpat,eget vestibulum sapien 
      pretium.`),
    },
    currentLaunchpad: [
      {
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/detail/artist/song'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/detail/artist/song'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/detail/artist/song'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/detail/artist/song'
      }
    ],
    artistLaunchpad: [
      {
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      }
    ],
  },
  launchpadArtists: { 
    header: {
      title: 'Top Featured Launches'
    },
    launchPadItems: [
      {
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      },{
        thumbnail:<NftComingSoonImage/>,
        artist:'Artist Name',
        songTitle:'Song Title',
        url:'/user/example/profile'
      }
    ],
  },
  footer: {
    logo: Logo,
    textUnderLogo: ["@rastafinance", "www.rasta.finance"],
    navigation: [
      {
        title: "Useful Links",
        item: [
          { label: "About", path: "/about" },
          { label: "Contact", path: "/contact" },
          { label: "Farms", path: "#" },
        ],
      },
      {
        title: "Farms",
        item: [
          { label: "Mr. Rasta", path: "/farms/mr-rasta" },
          { label: "Mrs. Rasta", path: "/farms/mrs-rasta" },
        ],
      },{
        title: "Artist Login",
        item: [
          { label: "Login", path: "/login" },
        ],
      },
    ],
    copyRight: parse(
      '<a href="#" class="text-yellow-rasta">Rasta Finance</a> 2021 // All Right Reserved'
    ),
  },
  socialMedia: [
    { name: "Twitter", icon: <FaIcons.FaTwitter />, link: "#" },
    { name: "Tik Tok", icon: <Io5Icons.IoLogoTiktok />, link: "#" },
    { name: "Instagram", icon: <FaIcons.FaInstagram />, link: "#" },
    { name: "Telegram", icon: <FaIcons.FaTelegramPlane />, link: "#" },
    { name: "Reddit", icon: <FaIcons.FaReddit />, link: "#" },
    { name: "Medium", icon: <FaIcons.FaMediumM />, link: "#" },
    { name: "Youtube", icon: <FaIcons.FaYoutube />, link: "#" },
  ]
}