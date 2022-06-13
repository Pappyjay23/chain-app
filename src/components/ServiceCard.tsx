import React from "react";
import { CardData } from "../data/Model";
interface Props {
	data: CardData;
}

const ServiceCard = ({ data }: Props) => {
	return (
		<>
			<div className='bg-white bg-center transition-all duration-500 p-8 rounded-l-lg rounded-br-lg rounded-tr-[3rem] shadow-lg shadow-slate-300 text-center mb-10 card__container'>
				<div className='flex justify-end mb-5'>
					<img src={data.icon} alt='Icon' className="card__icon" />
					<img src={data.iconHover} alt='Icon' className="card__icon__hover hidden" />
				</div>
				<h2 className='text-xl font-bold mb-5'>{data.title}</h2>
				<p className='text-sm text-slate-500 font-light mb-5'>{data.desc}</p>
				<a href='/' className='text-sm text-blue-600'>
					{data.link}
				</a>
			</div>
		</>
	);
};

export default ServiceCard;
