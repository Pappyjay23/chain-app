import React from "react";
import { PriceCardData } from "../data/AppData";
import PricingImage from "../images/pricing-table-01.png";

const Prices = () => {
	return (
		<div id="prices" className='px-5 py-10'>
			<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-5'>
				We Have The Best Pre-Order <span className='text-blue-600'>Prices</span>{" "}
				& You Can Get.
			</h1>
			<div>
				{PriceCardData.map((item, index) => (
					<div
						key={index}
						className='overflow-hidden relative mb-10 px-4 py-10 rounded-[3rem] shadow-lg border border-slate-100 shadow-slate-200'>
						<div className='absolute top-0 left-0 -z-10'>
							<img src={item.bgdTop} alt='Price Bgd' />
						</div>
						<p className='text-white text-[2.5rem] font-extrabold'>
							{item.price}
						</p>
						<p className='text-center text-xl font-extrabold mb-8'>
							{item.title}
						</p>
						<div className='flex justify-center mb-8'>
							<img src={PricingImage} alt='pricing' />
						</div>
						<div className='text-center mb-10'>
							{item.desc.map((desc) => (
								<p className='mb-4 text-sm text-blue-600 font-light' key={index}>
									{desc}
								</p>
							))}
							{item.descDone.map((done) => (
								<p
									className='mb-4 text-sm text-slate-400 line-through font-light'
									key={index}>
									{done}
								</p>
							))}
						</div>
						<div className="flex justify-center mb-5">
							<a href='/' className="text-blue-600 text-sm px-4 py-2 duration-300 border border-blue-600 rounded-full font-bold hover:bg-blue-600 hover:text-white">Purchase This Plan Now</a>
						</div>
						<div className='absolute bottom-0 left-0 right-0 -z-10'>
							<img src={item.bgdBottom} alt='Price Bgd' className="w-full" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Prices;
