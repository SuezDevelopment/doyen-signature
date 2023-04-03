"use client";

import clsx from "clsx";
import TypeIt from "typeit-react";

const phrases = [
    'is a fashion clothing brand that caters to women of all body types.',
    'is an online fashion school for practical sewing illustrations, techniques and trainings.',
    'is an online store that caters to women of all body types.',
	'is specialized in creating one-of-a-kind bridal designs that will leave you feeling breathtakingly beautiful on your big day.',
	'can help you design a wardrobe that fits your individual style and personality with our custom-made fashion services.',
	'is dedicated to creating high-quality, timeless pieces that will elevate any wardrobe.',
	'has something for women, from the latest fashion trends to classic designs that stand the test of time.',
	'believes that fashion should be accessible to everyone, which is why we offer a range of services and styles to suit any budget.',
	'is always on the cutting edge of the latest trends and styles, ensuring that our clients always look their best.',
	'believes that fashion is not just about clothes, but about self-expression and confidence.'
]

function shuffle(array: string[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffle(phrases);

export default function HeroText() {
    return (
		<div
			className={clsx(
				"leading-[1.25]",
				"mt-[5rem] mb-[1rem] sm:mb-[2rem] md:mb-[3rem] lg:mb-[4rem] xl:mb-[5rem]",
				"text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem]",
				"min-h-[14rem] sm:min-h-[18rem] md:min-h-[20rem] lg:min-h-[20rem] xl:min-h-[20rem]"
			)}
		>
			<span className="font-bold">Signatures by Doyen</span>{" "}
			<span className="text-white-500">
				<TypeIt
					options={{
						loop: true,
						cursor: false,
						strings: phrases,
						breakLines: false,
						speed: 25,
						deleteSpeed: 0,
						nextStringDelay: [5000, 0] as any,
					}}
				/>
				<span
					className={clsx(
						"ml-2 inline-block w-[0.5rem] bg-white-500 animate-pulse translate-y-[20%]",
						"h-[2rem] sm:h-[3rem] md:h-[4rem] lg:h-[5rem] xl:h-[5rem]"
					)}
				></span>
			</span>
		</div>
	);
}