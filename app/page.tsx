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

export default function Home() {
	const isMatchedTarget = useMediaQuery(768);

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

	return (
		<main className="overflow-hidden">
			<div className="relative">
				<LandingSection />
			</div>
			<HorizontalSection />
			<Technology />
			<Motto />
		</main>
	);
}
