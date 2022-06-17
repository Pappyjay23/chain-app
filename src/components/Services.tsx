import React from "react";
import { ServiceData } from "../data/AppData";
import ServiceCard from "./ServiceCard";
import ServicesBgd from "../images/services-right-dec.png";

const Services = () => {
	return (
		<div id='services' className='relative px-5 py-8 tab:px-8'>
			<div className='absolute -top-10 right-0 -z-10'>
				<img src={ServicesBgd} alt='Services Bgd' className='max-w-6xl' />
			</div>
			<div className="mb-20">
				<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-2 tab:font-semibold'>
					Amazing <span className='text-blue-600'>Services & Features</span> For
					You.
				</h1>
				<div className="flex justify-center">
					<div className='heading__border bg-blue-600 mr-2'></div>
					<div className='heading__border bg-blue-600'></div>
				</div>
			</div>
			<div>
				{ServiceData.map((data, index) => (
					<ServiceCard key={index} data={data} />
				))}
			</div>
		</div>
	);
};

export default Services;
