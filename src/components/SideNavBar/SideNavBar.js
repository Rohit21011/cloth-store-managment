import React, { useState } from "react";
import "./SideNavBar.css";
import { AiOutlineDashboard } from 'react-icons/ai';
import { RiAddCircleLine } from 'react-icons/ri';
import { PiNotepadBold } from 'react-icons/pi';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiSolidReport } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = (link) => {
	
      setActiveLink(link);
	  
    };
	const menuItems = [
		{
			text: "Dashboard",
			route:"/",
			icon:<AiOutlineDashboard style={{fontSize:"23px"}}/>,
		},
		{
			text: "Add Stock",
			route:"addStock",
			icon: <RiAddCircleLine style={{fontSize:"23px"}}/>,
		},
		{
			text: "Stock Details",
			route:"stockDetails",
			icon: <PiNotepadBold style={{fontSize:"23px"}}/>,
		},
		{
			text: "Billing",
			route:"bill",
			icon: <FaRegMoneyBillAlt style={{fontSize:"23px"}}/>,
		},
		{
			text: "Report",
			route:"report",
			icon: <BiSolidReport style={{fontSize:"23px"}}/>,
		},
		{
			text: "Logout",
			icon: <BiLogOutCircle style={{fontSize:"23px"}}/>,
		},
		
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<h2>Cloth Store</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon,route}) => (
						
						
						<Link to={route} 
							className={isExpanded ? `menu-item ${activeLink === route ? "active" : ""}` : `menu-item menu-item-NX ${activeLink === route ? "active" : ""}` } onClick={() => handleLinkClick(route)} 
							
						>
							<div style={{display: "flex",alignItems: "center",marginLeft: "10px"}}>{icon}
							
							{/* <img className="menu-item-icon" src={icon} alt="" srcset="" /> */}
							{isExpanded && <p style={{margin: "15px"}}>{text}</p>}</div>
						</Link>
						
					))}
				</div>
			</div>
			
				
		
		</div>
	);
};

export default SideNavBar;
