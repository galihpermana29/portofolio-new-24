'use client';
import Blogs from '@/components/blog';
import LandingSection from '@/components/landing-section';
import Projects from '@/components/projects';
import BlogTitle from '@/components/title-section/blog';
import ProjectTitle from '@/components/title-section/project';
import Image from 'next/image';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

import project1 from '@/public/project1.png';
import project2 from '@/public/project2.png';
import project3 from '@/public/project3.png';

import project4 from '@/public/project4.png';
import project5 from '@/public/project5.png';
import project6 from '@/public/project6.png';
import Technology from '@/components/technology';
import SplitType, { TargetElement } from 'split-type';
import Motto from '@/components/motto';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
	const sectionRef = useRef(null);
	const heroRef = useRef(null);
	const parallaxRef = useRef(null);
	const triggerRef = useRef(null);
	const bgRef = useRef(null);

	const textRevealRef = useRef(null);
	const textReveal2Ref = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const text1 = new SplitType(textRevealRef.current as any as TargetElement, {
			types: 'chars',
		});
		const text2 = new SplitType(
			textReveal2Ref.current as any as TargetElement,
			{
				types: 'chars',
			}
		);
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
	}, []);

	useEffect(() => {
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
	}, []);

	function initialiseLenisScroll() {
		const lenis = new Lenis({
			smoothWheel: true,
			duration: 0.6,
		});

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}

	const dataImageProjectOne = [project1, project2, project3];
	const dataImageProjectTwo = [project4, project5, project6];

	useEffect(() => {
		initialiseLenisScroll();
	}, []);
	return (
		<main className="overflow-hidden">
			<div className="relative">
				<LandingSection />
			</div>
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
			<Technology />
			<Motto />
		</main>
	);
}
