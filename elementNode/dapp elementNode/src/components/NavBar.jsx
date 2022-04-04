import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSliderAlt } from "react-icons/bi";
import { IoGameControllerOutline, IoHammerOutline } from "react-icons/io5";
import { MdStackedLineChart } from "react-icons/md";
import { BsViewList, BsTwitter } from "react-icons/bs";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { AiFillMediumSquare } from "react-icons/ai";
import logo from "../assets/images/white_logo_transparent.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const Links = [
    { to: "/", name: "Dashboard", icon: <BiSliderAlt /> },
    { to: "/mint_nft", name: "Mint NFT", icon: <BiPurchaseTagAlt /> },
    {
      to: "/stack_my_nfts",
      name: "Stake My NFTs",
      icon: <MdStackedLineChart />,
    },
  ];

  return (
    <div className="z-100">
      <div className="responsivenav">
        <h1>Dragon Egg Game</h1>
        <span onClick={() => setOpen(true)}>
          <i className="bx bx-menu"></i>
        </span>
      </div>
      <header className={open ? "open_header" : ""}>
        <div className="sidenav">
          <Link onClick={() => setOpen(false)} to="#" className="close">
            <i className="bx bx-x"></i>
          </Link>

          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              {Links.map((link, index) => (
                <li
                  key={index}
                  className={pathname === link.to ? "active_link" : ""}
                >
                  <Link to={link.to} className="links">
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="social">
            <a
              href="https://discord.com/invite/dragonegggame"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://twitter.com/DragonEggGame"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              href="https://medium.com/@dragonegg1570"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillMediumSquare />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
