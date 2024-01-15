import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

export default function Technology() {
	const isMatchedTarget = useMediaQuery(768);
	if (!isMatchedTarget) {
		return (
			<div>
				<div className="min-h-[100vh] bg-[#fcfaf5] bg-cover flex justify-center relative pt-[10%]">
					<div className="h-screen flex flex-col justify-end items-center w-max px-[5%]">
						<h1 className="max-w-[700px] self-start text-[25px] relative top-[0%]">
							For a better apps performance, here’s the total list of technology
							that i’ve used for entire my{' '}
							<span className="font-bold">2 years</span> career as Frontend
							Developer.
						</h1>
						<div className="grid grid-cols-4 items-end gap-[10px] mt-[10px]">
							<div>
								<h1 className="text-center max-w-[100px]">
									Flutter/React Native
								</h1>
								<div className="w-[100%] col-span-1 h-[40vh] bg-pattern-5 bg-cover"></div>
							</div>
							<div>
								<h1 className="text-center max-w-[100px]">Web3/Ether JS</h1>
								<div className="w-[100%] col-span-1 h-[40vh] bg-pattern-7 bg-cover"></div>
							</div>
							<div>
								<h1 className="text-center max-w-[100px]">Tailwind & SCSS</h1>
								<div className="w-[100%] col-span-1 h-[50vh] bg-pattern-5 bg-cover"></div>
							</div>
							<div>
								<h1 className="text-center max-w-[100px]">Next/React TS</h1>
								<div className="w-[100%] col-span-1 h-[60vh] bg-pattern-3 bg-cover"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className="min-h-[100vh] bg-[#fcfaf5] bg-cover flex justify-center relative pt-[10%]">
				<div className="flex flex-col justify-end items-center w-max">
					<h1 className="max-w-[700px] self-start text-[38px]">
						For a better apps performance, here’s the total list of technology
						that i’ve used for entire my{' '}
						<span className="font-bold">2 years</span> career as Frontend
						Developer.
					</h1>
					<div className="grid grid-cols-5 items-end gap-[10px]">
						<div>
							<h1 className="text-center max-w-[150px]">
								Flutter/React Native
							</h1>
							<div className="w-[150px] col-span-1 h-[40vh] bg-pattern-5 bg-cover"></div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">Web3/Ether JS</h1>
							<div className="w-[150px] col-span-1 h-[50vh] bg-pattern-7 bg-cover"></div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">Zustand/React Query</h1>
							<div className="w-[150px] col-span-1 h-[40vh] bg-pattern-6 bg-cover"></div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">
								Material UI/Ant Design
							</h1>
							<div className="w-[150px] col-span-1 h-[50vh] bg-pattern-4 bg-cover"></div>
						</div>
						<div>
							<h1 className="text-center max-w-[150px]">Next/React TS</h1>
							<div className="w-[150px] col-span-1 h-[60vh] bg-pattern-3 bg-cover"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
