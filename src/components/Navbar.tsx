import React, { useState } from "react";
import Logo from "../images/logo.png";

const Navbar = () => {
	const [nav, setNav] = useState<boolean>(false);
	const [fixed, setFixed] = useState<boolean>(false);

	const closeNav = () =>{
		setNav(false)
	}

	const toggleFixed = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setFixed(true);
		} else if (scrolled <= 300) {
			setFixed(false);
		}
	};
	window.addEventListener("scroll", toggleFixed)

	return (
		<nav className={`bg-white border-b-2 border-slate-200 w-full z-10 ${fixed ? 'fixed': 'relative'}`}>
			<div className='nav__container px-5 py-5 flex justify-between items-center'>
				<a onClick={closeNav} href='#home' className='nav__logo'>
					<img src={Logo} alt='Logo' className='h-10' />
				</a>
				<div
					className={nav ? "change menu__bar" : "menu__bar"}
					onClick={() => setNav(!nav)}>
					<div className='bar1'></div>
					<div className='bar2'></div>
					<div className='bar3'></div>
				</div>
			</div>
			<div
				className={
					nav
						? ` transition-all duration-500 opacity-100 absolute left-0 bg-slate-100 text-black w-full p-5 flex flex-col justify-center items-center`
						: "transition-all duration-500 opacity-0 absolute -left-full bg-slate-100 text-black w-full p-5 flex flex-col justify-center items-center"
				}>
				<a onClick={closeNav} href='#home' className='py-3 font-bold'>
					Home
				</a>
				<a onClick={closeNav} href='#services' className='py-3 font-bold'>
					Services
				</a>
				<a onClick={closeNav} href='#about' className='py-3 font-bold'>
					About
				</a>
				<a onClick={closeNav} href='#prices' className='py-3 font-bold'>
					Pricing
				</a>
				<a onClick={closeNav} href='#mailing' className='py-3 font-bold'>
					Newsletter
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
