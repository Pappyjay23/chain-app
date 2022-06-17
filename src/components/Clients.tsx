import React from "react";
import { ClientData } from "../data/AppData";
import QuoteImg from "../images/client-image.jpg";
import Quote from "../images/quote.png";
import { AiFillStar } from "react-icons/ai";

const Clients = () => {
	return (
		<div className='px-5 py-8 tab:px-8 laptop:max-w-[1200px] laptop:mx-auto'>
			<div className='mb-8'>
				<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-2 tab:font-semibold'>
					Check What <span className='text-blue-600'>The Clients Say</span> &
					About Our App Dev.
				</h1>
				<div className='flex justify-center'>
					<div className='heading__border bg-blue-600 mr-2'></div>
					<div className='heading__border bg-blue-600'></div>
				</div>
			</div>
			<div className='mt-10'>
				{ClientData.map((item, index) => (
					<div
						key={index}
						className='tab:grid grid-cols-3 mb-10 tab:w-[85%] tab:m-auto tab:mb-10 hover:cursor-pointer ratings'>
						<div className='ratings text-center flex flex-col items-center'>
							<p className='text-xl font-extrabold tab:font-normal '>
								{item.name}
							</p>
							<span className='text-slate-500 text-sm'>{item.date}</span>
							<p className='mt-3 text-slate-500 font-bold tab:hidden'>
								{item.rating}
							</p>
						</div>
						<div className='hidden tab:flex flex-col items-center'>
							<span className='text-slate-400 text-base font-bold'>
								{item.field}
							</span>
						</div>
						<div className='hidden tab:flex flex-col items-center'>
							<p className='text-slate-500 text-sm font-bold flex items-center'>
								<span className="mr-1">{item.rating}</span>
								<span className='mr-1'>
									<AiFillStar />
								</span>
								<span className='mr-1'>
									<AiFillStar />
								</span>
								<span className='mr-1'>
									<AiFillStar />
								</span>
								<span className='mr-1'>
									<AiFillStar />
								</span>
								<span className='mr-1'>
									<AiFillStar />
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="tab:flex tab:px-10">
				<div className='quote__card px-8 py-14 rounded-[3rem] mb-5 w-full tab:w-[50%] tab:mx-auto'>
					<div className='mb-5'>
						<img src={Quote} alt='Quote' />
					</div>
					<p className='leading-7 text-white font-bold italic'>
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
						rerum minus qui explicabo eveniet aut porro facere dolore maiores
						aperiam hic totam corrupti distinctio, ut architecto ipsa quas nemo
						error."
					</p>
				</div>
				<div className='flex flex-col items-center mb-10 mobile-md:flex-row tab:justify-center tab:flex-col tab:w-[50%] tab:mx-auto'>
					<div className='mb-5 mobile-md:mr-5'>
						<img src={QuoteImg} alt='Client' className='rounded-full rot-90' />
					</div>
					<div className='text-center'>
						<p className='font-extrabold text-xl'>May Catherina</p>
						<p className='text-sm'>Chief Executive Officer (C.E.O)</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
