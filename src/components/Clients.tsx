import React from "react";
import { ClientData } from "../data/AppData";
import QuoteImg from "../images/client-image.jpg"; 
import Quote from "../images/quote.png";    


const Clients = () => {
	return (
		<div className='px-5 py-8'>
			<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-5'>
				Check What <span className='text-blue-600'>The Clients Say</span> &
				About Our App Dev.
			</h1>
			<div className='mt-10'>
				{ClientData.map((item, index) => (
					<div key={index} className='ratings text-center mb-10'>
						<p className='text-xl font-extrabold '>{item.name}</p>
						<span className='text-slate-500 text-sm'>{item.date}</span>
						<p className='mt-3 text-slate-500 font-bold'>{item.rating}</p>
					</div>
				))}
			</div>
			<div className='quote__card px-8 py-14 rounded-[3rem] mb-5'>
				<div className='mb-5'>
					<img src={Quote} alt='Quote' />
				</div>
				<p className='leading-7 text-white font-bold italic'>
					"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi rerum
					minus qui explicabo eveniet aut porro facere dolore maiores aperiam
					hic totam corrupti distinctio, ut architecto ipsa quas nemo error."
				</p>
			</div>
			<div className="flex flex-col items-center mb-10">
				<div className="mb-5">
					<img src={QuoteImg} alt='Client' className="rounded-full" />
				</div>
				<p className="font-extrabold text-xl">May Catherina</p>
				<p className="text-sm">Chief Executive Officer (C.E.O)</p>
			</div>
		</div>
	);
};

export default Clients;
