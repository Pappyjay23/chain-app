import React from "react";
import { ServiceData } from "../data/AppData";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<div className="relative px-5">
            {/* <div className="services__container"></div> */}
			<h1 className="text-black text-3xl leading-normal capitalize text-center font-extrabold mb-5">Amazing <span className="text-blue-600">Services & Features</span> For You.</h1>
			<div>
				{ServiceData.map((data, index) =>(
                    <ServiceCard key={index} data={data} />
                ))}
			</div>
		</div>
	);
};

export default Services;
