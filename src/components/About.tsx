import React from "react";
import { AboutData } from "../data/AppData";
import AboutBgd from "../images/about-right-dec.png"

const About = () => {
	return (
		<div id="about" className='px-5 py-8'>
			<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-5'>
				About <span className='text-blue-600'>What We Do</span> & Who We Are.
			</h1>
			<div>
				{AboutData.map((item, index) => (
					<a href='/'>
						<div
							key={index}
							className='text-center bg-white mb-5 rounded-[5rem] p-3 shadow-lg border border-slate-100 shadow-slate-200'>
							<p className='text-lg font-extrabold mb-1 hover:text-blue-500'>
								{item.title}
							</p>
							<p className='text-sm text-slate-500 font-light'>{item.desc}</p>
						</div>
					</a>
				))}
			</div>
			<p className='text-sm text-center mb-8 text-slate-500'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dualit ipsum
				dolor sit amet
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
            <div>
                <img src={AboutBgd} alt="About bgd" />
            </div>
		</div>
	);
};

export default About;
