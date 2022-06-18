import React from "react";
import { AboutData } from "../data/AppData";
import AboutBgd from "../images/services-left-dec.png";
import AboutImage from "../images/about-right-dec.png";
import AboutBgd2 from "../images/about-bg.jpg";

const About = () => {
	return (
		<div
			id='about'
			className='px-5 py-[5rem] relative tab:px-8'>
			<div className='absolute -top-28 left-0 -z-10'>
				<img src={AboutBgd} alt='Services Bgd' className='w-full' />
			</div>
			<div className='hidden absolute -top-[20rem] right-0 -z-20 laptop:flex'>
				<img src={AboutBgd2} alt='Services Bgd' className='w-full' />
			</div>
			<div className="laptop:flex laptop:max-w-[1200px] laptop:mx-auto">
				<div className='laptop:w-[45%] laptop:mx-auto'>
					<div className='mb-8'>
						<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-2 tab:font-semibold'>
							About <span className='text-blue-600'>What We Do</span> & Who We
							Are.
						</h1>
						<div className='flex justify-center'>
							<div className='heading__border bg-blue-600 mr-2'></div>
							<div className='heading__border bg-blue-600'></div>
						</div>
					</div>
					<div>
						{AboutData.map((item, index) => (
							<a href='/'>
								<div
									key={index}
									className='text-center bg-white mb-5 rounded-[5rem] p-3 shadow-lg border border-slate-100 shadow-slate-200 w-full tab:w-[70%] tab:mx-auto'>
									<p className='text-lg font-extrabold mb-1 hover:text-blue-500 tab:font-semibold tab:text-xl'>
										{item.title}
									</p>
									<p className='text-sm text-slate-500 font-light'>
										{item.desc}
									</p>
								</div>
							</a>
						))}
					</div>
					<p className='text-sm text-center mb-8 text-slate-500'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dualit
						ipsum dolor sit amet
					</p>
					<div className='flex justify-center'>
						<a
							href='/'
							className='about__btn px-7 py-3 rounded-full text-white font-bold text-sm mb-2'>
							Start 14-Day Free Trial
						</a>
					</div>
					<p className='text-xs text-center mb-8 text-slate-500'>
						*No Credit Card Required
					</p>
				</div>
				<div className='laptop:w-[45%] laptop:mx-auto'>
					<img src={AboutImage} alt='About' />
				</div>
			</div>
		</div>
	);
};

export default About;
