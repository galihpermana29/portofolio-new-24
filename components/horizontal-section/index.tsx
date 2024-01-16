import { MutableRefObject, useEffect, useRef } from 'react';
import SplitType, { TargetElement } from 'split-type';
import Projects from '../projects';
import ProjectTitle from '../title-section/project';
import Blogs from '../blog';
import BlogTitle from '../title-section/blog';
import {
	dataImageProjectOne,
	dataImageProjectTwo,
} from '@/utils/data/data-projects';

import gsap from 'gsap';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';
interface HorizontalSectionI {
	heroRef: MutableRefObject<null | any>;
}

export default function HorizontalSection() {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);
	const heroRef = useRef(null);
	const parallaxRef = useRef(null);
	const bgRef = useRef(null);
	const textRevealRef = useRef(null);
	const textReveal2Ref = useRef(null);

	const isMatchedTarget = useMediaQuery(768);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: '-400vw',
				ease: 'none',
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: 'top top',
					end: '2000 top',
					scrub: 1,
					pin: true,
					invalidateOnRefresh: true,
				},
			}
		);

		if (!isMatchedTarget) {
			pin.kill();
			return;
		}

		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		const text1 = new SplitType(textRevealRef.current as any as TargetElement, {
			types: 'chars',
		});
		const text2 = new SplitType(
			textReveal2Ref.current as any as TargetElement,
			{
				types: 'chars',
			}
		);

		gsap.from(text1.chars, {
			scrollTrigger: {
				trigger: textRevealRef.current,
				end: 'start left',
				start: '-1500 left',
				containerAnimation: pin,
				scrub: true,
				id: '1',
			},
			opacity: 0.1,
			stagger: 0.1,
		});

		gsap.from(text2.chars, {
			scrollTrigger: {
				trigger: textReveal2Ref.current,
				end: '-300 left',
				start: '-1000 left',
				containerAnimation: pin,
				scrub: true,
				// markers: true,
				id: '2',
			},
			opacity: 0.1,
			stagger: 0.1,
		});

		return () => {
			{
			}
			pin.kill();
		};
	}, [isMatchedTarget]);

	useEffect(() => {
		if (!isMatchedTarget) return;
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				invalidateOnRefresh: true,
			},
		});
		const movement = -300;
		tl.to(parallaxRef.current, { x: movement, ease: 'none' }, 0);
		tl.to(bgRef.current, { backgroundPosition: -0.001, ease: 'none' }, 0);
	}, [isMatchedTarget]);

	if (!isMatchedTarget) {
		return (
			<main className="">
				<Projects data={dataImageProjectOne} bg="bg-[#2F2E2C]" />
				<ProjectTitle />
				<Projects data={dataImageProjectTwo} bg="bg-[#2F2E2C]" />
				<Blogs />
				<BlogTitle />
			</main>
		);
	}

	return (
		<main
			ref={triggerRef}
			id="section_to-pin"
			className=" h-[100vh] flex justify-start items-center overflow-hidden w-[100vw] section_to-pin">
			<div
				ref={sectionRef}
				id="section_pin"
				className="flex flex-nowrap section_pin">
				<div ref={heroRef}>
					<Projects data={dataImageProjectOne} bg="bg-[#2F2E2C]" />
				</div>
				<div className="bg-pattern-1 bg-repeat bg-center" ref={bgRef}>
					<div ref={parallaxRef}>
						<div className="flex">
							<ProjectTitle refSection={textRevealRef} />
						</div>
					</div>
				</div>
				<div>
					<Projects data={dataImageProjectTwo} bg="bg-[#2F2E2C]" />
				</div>
				<div>
					<Blogs />
				</div>
				<div>
					<BlogTitle refSection={textReveal2Ref} />
				</div>
			</div>
		</main>
	);
}
