import React from "react";
import HeroImage from "../images/slider-dec.png";

const HeroSection = () => {
	return (
		<div className="px-5 py-20">
			<div className="mb-10">
				<h1 className="text-5xl leading-normal capitalize text-center font-extrabold mb-5">Get the latest apps from app stores</h1>
				<p className="text-sm leading-relaxed text-center text-slate-500 font-light mb-12">
					Chain App Dev is an app landing page HTML5 template based on Bootstrap
					v5.1.3 CSS layout provided by TemplateMo, a great website to download
					free CSS templates.
				</p>
				<div className="flex justify-center">
					<a href='/' className="mr-4 rounded-full font-bold bg-blue-500 text-white text-sm py-3 px-5">Free Quote</a>
					<a href='/' className="rounded-full font-bold bg-blue-500 text-white text-sm py-3 px-5">Free Quote</a>
				</div>
			</div>
            <div>
                <img src={HeroImage} alt="Hero" />
            </div>
		</div>
	);
};

export default HeroSection;
