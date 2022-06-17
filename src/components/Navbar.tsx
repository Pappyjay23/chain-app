import React, { useState } from "react";
import Logo from "../images/logo.png";
import Logo2 from "../images/white-logo.png";

const Navbar = () => {
	const [nav, setNav] = useState<boolean>(false);
	const [fixed, setFixed] = useState<boolean>(false);

	const closeNav = () => {
		setNav(false);
	};

	const toggleFixed = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setFixed(true);
		} else if (scrolled <= 300) {
			setFixed(false);
		}
	};
	window.addEventListener("scroll", toggleFixed);

	return (
		<nav
			className={`border-b w-full z-10 ${
				fixed ? "fixed bg-white border-slate-200 transition-all duration-300" : "sticky bg-transparent border-none shadow-sm transition-all duration-300"
			}`}>
			<div className='nav__container px-5 py-5 flex justify-between items-center tab:px-8 tab:py-3 laptop:max-w-[1200px] laptop:mx-auto'>
				<a onClick={closeNav} href='#home' className='nav__logo'>
					<img src={Logo} alt='Logo' className='h-10' />
				</a>
				<a onClick={closeNav} href='#home' className='nav__logo2 '>
					<img src={Logo2} alt='Logo' className='h-10' />
				</a>
				<div className="hidden tab:flex tab:items-center nav__links">
					<a onClick={closeNav} href='#home' className='py-3 mx-3 text-sm'>
						Home
					</a>
					<a onClick={closeNav} href='#services' className='py-3 mx-3 text-sm'>
						Services
					</a>
					<a onClick={closeNav} href='#about' className='py-3 mx-3 text-sm'>
						About
					</a>
					<a onClick={closeNav} href='#prices' className='py-3 mx-3 text-sm'>
						Pricing
					</a>
					<a onClick={closeNav} href='#mailing' className='py-3 mx-3 text-sm'>
						Newsletter
					</a>
					<a onClick={closeNav} href='#home' className='mx-3 about__btn px-7 py-3 rounded-full text-white font-bold text-sm mb-2'>
						Sign In
					</a>
				</div>
				<div
					className={`${nav ? "change menu__bar" : "menu__bar"} tab:hidden`}
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
				<a onClick={closeNav} href='#home' className='py-3 font-bold'>
					Sign In
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
