import React from "react";
import HeroImage from "../images/slider-dec.png";
import {FaApple} from 'react-icons/fa'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import HeroBgd from "../images/slider-left-dec.png"

interface Props {
	children: JSX.Element;
}

const HeroSection = ({ children }: Props) => {
	return (
		<div className="relative">
			<div className="hidden absolute left-0 -z-10 laptop:flex laptop-xl:right-0 laptop-xl:-top-[60rem]">
				<img src={HeroBgd} alt="Hero Bgd" className="w-[80%] laptop-xl:w-full" />
			</div>
			{children}
			<div id='home' className='px-5 py-20 tab:px-8 laptop:flex laptop:pt-[10rem] laptop:pb-[15rem] laptop:max-w-[1200px] laptop:mx-auto'>
				<div className='mb-10 laptop:w-[40%] laptop:mx-auto'>
					<h1 className='grad-text text-5xl leading-normal capitalize text-center font-extrabold mb-5 tab:font-semibold laptop:text-left laptop:text-white'>
						Get the latest apps from app stores
					</h1>
					<p className='text-sm leading-relaxed text-center text-slate-500 font-light mb-12 laptop:text-left laptop:text-white'>
						Chain App Dev is an app landing page HTML5 template based on
						Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website
						to download free CSS templates.
					</p>
					<div className='flex flex-col justify-center mobile-md:flex-row'>
						<a
							href='#home'
							className='mb-4 mx-2 about__btn px-5 py-3 rounded-full text-white font-bold text-sm text-center flex justify-center items-center mobile-md:mb-0'>
							<span className="mr-2">Get on AppStore</span>
							<span className="text-xl"><FaApple /></span>
						</a>
						<a
							href='#home'
							className='mx-2 about__btn px-5 py-3 rounded-full text-white font-bold text-sm text-center flex justify-center items-center'>
							<span className="mr-2">Get on PlayStore</span>
							<span className="text-xl"><IoLogoGooglePlaystore /></span>
						</a>
						{/* <a
							href='/'
							className='mr-4 rounded-full font-bold bg-blue-500 text-white text-sm py-3 px-5'>
							Free Quote
						</a>
						<a
							href='/'
							className='rounded-full font-bold bg-blue-500 text-white text-sm py-3 px-5'>
							Free Quote
						</a> */}
					</div>
				</div>
				<div className="laptop:w-[40%] laptop:mx-auto">
					<img src={HeroImage} alt='Hero' />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
