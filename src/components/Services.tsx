import React from "react";
import { ServiceData } from "../data/AppData";
import ServiceCard from "./ServiceCard";
import ServicesBgd from "../images/services-right-dec.png"

const Services = () => {
	return (
		<div id='services' className='relative px-5 py-8'>
			<div className='absolute -top-10 right-0 -z-10'>
				<img src={ServicesBgd} alt='Services Bgd' className="max-w-6xl" />
			</div>
			<h1 className='text-black text-3xl leading-normal capitalize text-center font-extrabold mb-20'>
				Amazing <span className='text-blue-600'>Services & Features</span> For
				You.
			</h1>
			<div>
				{ServiceData.map((data, index) => (
					<ServiceCard key={index} data={data} />
				))}
			</div>
		</div>
	);
};

export default Services;
