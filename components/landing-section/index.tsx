import Image from 'next/image';
import lineImage from '@/public/line.png';
import roundArrow from '@/public/round-arrow.png';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType, { TargetElement } from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';
import { useWindowSize } from '@uidotdev/usehooks';

export default function LandingSection() {
	const isMatchedTarget = useMediaQuery(768);
	const textToAnimate = useRef(null);
	const container = useRef(null);

	const { width } = useWindowSize();

	useEffect(() => {
		const text1 = new SplitType(textToAnimate.current as any as TargetElement, {
			types: 'chars',
		});
		if (isMatchedTarget !== null) {
			gsap.from(text1.chars, {
				scrollTrigger: {
					trigger: textToAnimate.current,
					start: '-100% top',
					end: 'top top',
					scrub: false,
					id: '1',
				},
				opacity: 0,
				y: 60,
				duration: 0.5,
			});
		}
	}, [width]);

	if (width === null) return;

	if (width < 768) {
		return (
			<div>
				<div className="max-h-[80vh] bg-[#fcfaf5] bg-cover relative overflow-hidden">
					<div className="relative z-[2] border-red-300 min-h-[80vh] flex items-center justify-center">
						<div className="px-[10%]">
							<div className="flex items-center justify-center text-center">
								<p className="text-[2em] font-[600] ">
									{"I'm"}{' '}
									<span className="bg-black text-white rounded-full px-[20px] inline-block">
										Galih,
									</span>{' '}
									a{' '}
									<span className="font-[100] italic">
										web-3 frontend developer
									</span>{' '}
									with a taste of{' '}
									<span className="italic underline">creativity</span> and
									<span className="italic underline"> intuitivity</span>
								</p>
							</div>
						</div>
					</div>
					{/* <div className="absolute top-0 w-full flex justify-center z-[1] h-[100vh]">
						<Image src={lineImage} width={3000} height={3000} alt="line" />
					</div> */}
				</div>
			</div>
		);
	}

	return (
		<div ref={container}>
			<div className="min-h-[100vh] bg-[#fcfaf5] bg-cover relative overflow-hidden">
				<div className="relative z-[2] border-red-300 min-h-[100vh] flex items-center justify-center pb-[10%]">
					<div className="px-[12%]">
						<div className="flex items-center justify-center text-center gap-[50px] mt-[30px]">
							<p
								className="text-[4em] font-[600] max-w-[900px] opacity-1"
								ref={textToAnimate}>
								{"I'm"}{' '}
								<span className="bg-black text-white rounded-full px-[30px]">
									Galih Permana,
								</span>{' '}
								a{' '}
								<span className="font-[100] italic">
									web-3 frontend developer
								</span>{' '}
								with a taste of{' '}
								<span className="italic underline">creativity</span> and
								<span className="italic underline"> intuitivity</span>
							</p>
						</div>
					</div>
				</div>
				{/* <div className="absolute top-0 w-[100%] flex justify-center z-[1] opacity-4">
					<Image src={lineImage} width={3000} height={3000} alt="line" />
				</div> */}
			</div>
		</div>
	);
}
