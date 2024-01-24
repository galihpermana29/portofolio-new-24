'use client';
import LandingSection from '@/components/landing-section';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

import Technology from '@/components/technology';
import Motto from '@/components/motto';
import HorizontalSection from '@/components/horizontal-section';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Home() {
	const isMatchedTarget = useMediaQuery(768);
	const { width } = useWindowSize();

	const heroRef = useRef(null);
	const parallaxRef = useRef(null);

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

	useEffect(() => {
		initialiseLenisScroll();
	}, []);

	useEffect(() => {
		if (width === null) return;
		if (width < 768) return;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				invalidateOnRefresh: true,
				markers: true,
			},
		});
		const movement = -200;

		tl.to(parallaxRef.current, { y: movement, ease: 'none' }, 0);
		// tl.to(bgRef.current, { backgroundPosition: -0.001, ease: 'none' }, 0);
	}, [width]);

	return (
		<main className="overflow-hidden">
			<div className="relative">
				<LandingSection />
			</div>
			<HorizontalSection />
			<Technology heroRef={heroRef} />
			<Motto parallaxRef={parallaxRef} />
		</main>
	);
}
