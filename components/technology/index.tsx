import { useWindowSize } from '@uidotdev/usehooks';
import gsap from 'gsap';
import { MutableRefObject, useEffect, useRef } from 'react';
import SplitType, { TargetElement } from 'split-type';

import { motion } from 'framer-motion';
interface TechnologyI {
	heroRef?: MutableRefObject<null>;
}

export default function Technology({ heroRef }: TechnologyI) {
	const { width } = useWindowSize();
	const textToAnimate = useRef(null);
	const container = useRef(null);

	useEffect(() => {
		const text1 = new SplitType(textToAnimate.current as any as TargetElement, {
			types: 'chars',
		});
		gsap.from(text1.chars, {
			scrollTrigger: {
				trigger: heroRef!.current,
				start: '-30% top',
				end: 'bottom bottom',
				scrub: true,
				id: '12',
			},
			stagger: 0.1,
			opacity: 0.1,
		});
	}, [width]);

	if (width === null) return;
	if (width < 768) {
		return (
			<div>
				<div className="pt-[50px] bg-[#fcfaf5] bg-cover flex justify-center relative mt-[-10px]">
					<div className="flex flex-col justify-end items-center w-max px-[5%] ">
						<h1 className="max-w-[700px] self-start text-[25px] relative top-0 ">
							Here’s the <span className="italic">list of technology </span>
							i’ve used for entire my <span className="font-bold">
								2 years
							</span>{' '}
							career as{' '}
							<span className="underline italic">frontend developer</span>.
						</h1>
						<div className="grid grid-cols-4 items-end gap-[5px] mt-[50px]">
							<div>
								<h1 className="text-center max-w-[100px] text-[12px] mb-[10px]">
									Flutter / React Native
								</h1>
								<div className="w-[100%] col-span-1 h-[30vh] bg-[#23261b] bg-cover"></div>
							</div>
							<div>
								<h1 className="text-center max-w-[100px] text-[12px] mb-[10px]">
									Web3
								</h1>
								<div className="w-[100%] col-span-1 h-[40vh] bg-[#261B24] bg-cover"></div>
							</div>
							<div>
								<h1 className="text-center max-w-[100px] text-[12px] mb-[10px]">
									Tailwind & SCSS
								</h1>
								<div className="w-[100%] col-span-1 h-[50vh] bg-[#1B2625] bg-cover"></div>
							</div>
							<div>
								<h1 className="text-center max-w-[100px] text-[12px] mb-[10px]">
									Next/React TS
								</h1>
								<div className="w-[100%] col-span-1 h-[60vh] bg-[#1D1B26] bg-cover"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div ref={heroRef}>
			<div className="min-h-[100vh] bg-[#fcfaf5] bg-cover flex justify-center relative pt-[10%]">
				<div className="flex flex-col justify-end items-center w-max">
					<h1
						className="max-w-[800px] self-start text-[42px]"
						ref={textToAnimate}>
						Here’s the <span className="italic">list of technology </span> i’ve
						used for entire my <span className="font-bold">2 years</span> career
						as <span className="italic">frontend developer</span>.
					</h1>
					<div className="grid grid-cols-5 items-end gap-[10px] min-h-[70vh]">
						<div>
							<h1 className="text-center max-w-[150px]">
								Flutter / React Native
							</h1>
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								whileInView={{
									y: 0,
									opacity: 1,
									transition: { ease: 'easeInOut', duration: 0.5 },
									height: '40vh',
								}}
								className="w-[150px] col-span-1 h-[40vh] bg-[#23261b] bg-cover"></motion.div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">Web3</h1>
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								whileInView={{
									y: 0,
									opacity: 1,
									transition: { ease: 'easeInOut', duration: 0.5 },
									height: '50vh',
								}}
								className="w-[150px] col-span-1 h-[50vh] bg-[#261B24] bg-cover"></motion.div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">
								Zustand / React Query
							</h1>
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								whileInView={{
									y: 0,
									opacity: 1,
									transition: { ease: 'easeInOut', duration: 0.5 },
									height: '40vh',
								}}
								className="w-[150px] col-span-1 h-[40vh] bg-[#261E1B] bg-cover"></motion.div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">
								Material UI / Ant Design
							</h1>
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								whileInView={{
									y: 0,
									opacity: 1,
									transition: { ease: 'easeInOut', duration: 0.5 },
									height: '50vh',
								}}
								className="w-[150px] col-span-1 h-[50vh] bg-[#1B2625] bg-cover"></motion.div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">Next/React TS</h1>
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								whileInView={{
									y: 0,
									opacity: 1,
									transition: { ease: 'easeInOut', duration: 0.5 },
									height: '60vh',
								}}
								className="w-[150px] col-span-1 h-[60vh] bg-[#2f2c3d] bg-cover"></motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
