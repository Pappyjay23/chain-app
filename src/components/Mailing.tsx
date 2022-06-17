import React from "react";
import { FooterLinks } from "../data/AppData";
import Logo from "../images/white-logo.png";

const Mailing = () => {
	return (
		<div id='mailing' className='mailing px-5 py-10'>
			<div className="mb-8">
				<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-2'>
					Join our mailing list to recieve the news & latest trends
				</h1>
				<div className='flex justify-center'>
					<div className='heading__border mr-2'></div>
					<div className='heading__border'></div>
				</div>
			</div>
			<form className='flex flex-col mb-10'>
				<input
					type='email'
					placeholder='Email address...'
					className='text-slate-800 mb-5 shadow-sm shadow-slate-300 border border-slate-100 placeholder:text-slate-800 outline-none rounded-full px-5 py-3'
				/>
				<button
					type='submit'
					className='text-blue-600 shadow-sm shadow-slate-300 border border-slate-100 bg-white rounded-full px-5 py-3'>
					Subscribe now
				</button>
			</form>
			<div>
				{FooterLinks.map((item, index) => (
					<div key={index} className='text-white text-center mb-16'>
						<p className='font-bold text-xl mb-5'>{item.title}</p>
						<div className='flex flex-col'>
							{item.links.map((link, index) => (
								<a href='#home' key={index} className='mb-3 text-sm'>
									{link}
								</a>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<a href='#home'>
					<div className='flex justify-center mb-5'>
						<img src={Logo} alt='logo' />
					</div>
				</a>
				<p className='text-white text-xs text-center'>
					Copyright © 2022 Chain App Dev Company. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Mailing;
