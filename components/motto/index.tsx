import Image from 'next/image';
import standout from '@/public/standout.png';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { MutableRefObject } from 'react';

interface MottoI {
	parallaxRef?: MutableRefObject<null | any>;
}
export default function Motto({ parallaxRef }: MottoI) {
	const isMatchedTarget = useMediaQuery(768);
	if (!isMatchedTarget) {
		return (
			<div className="bg-[#1B1B1B] min-h-screen flex justify-center relative">
				<div className=" flex flex-col justify-center items-center max-w-[90%] relative">
					<div className="text-[30px] font-[200] text-white absolute top-[22%] text-right self-end">
						You bring the <span className="italic">vision</span>, <br />I help
						you <span className="font-bold">stand out</span>.
					</div>
					<div className=" self-start">
						<Image src={standout} alt="skj" />
					</div>
					<div className="flex flex-col justify-between items-start gap-y-[30px] mt-[20px]">
						<div className="text-[16px] text-white w-full text-justify">
							I uncover what was already a part of your company. I take your
							goals, your passions, and all the tiny details that make you stand
							above
						</div>
						<div className="text-[16px] text-white w-full text-justify">
							the rest — and I give them a voice and a presence that people
							can’t ignore. You already know that what you do is game changing,
							but I can
						</div>
						<div className="text-[16px] text-white w-full text-justify ">
							help others to understand that. So let’s get started, I’d love to
							hear what you’re creating and become a part of it.
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className="bg-[#1B1B1B] min-h-screen flex justify-center relative"
			ref={parallaxRef}>
			<div className=" flex flex-col justify-center items-center max-w-[70%] relative">
				<div className="text-[70px] font-[200] text-white top-[50%] translate-y-[-50%] absolute text-right self-end">
					You bring the <span className="italic">vision</span>, <br />I help you{' '}
					<span className="font-bold">stand out</span>.
				</div>
				<div className=" self-start">
					<Image src={standout} alt="skj" />
				</div>
				<div className="grid-cols-[30%_30%_30%] grid justify-between items-start gap-x-[30px] mt-[20px]">
					<div className="text-[20px] text-white w-full text-justify">
						I uncover what was already a part of your company. I take your
						goals, your passions, and all the tiny details that make you stand
						above
					</div>
					<div className="text-[20px] text-white w-full text-justify">
						the rest — and I give them a voice and a presence that people can’t
						ignore. You already know that what you do is game changing, but I
						can
					</div>
					<div className="text-[20px] text-white w-full text-justify ">
						help others to understand that. So let’s get started, I’d love to
						hear what you’re creating and become a part of it.
					</div>
				</div>
			</div>
		</div>
	);
}
