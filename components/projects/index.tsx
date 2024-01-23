import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import Image, { StaticImageData } from 'next/image';

interface ProjectsI {
	data: StaticImageData[];
	bg: 'bg-[#2F2E2C]' | 'bg-[#fcfaf5]';
}

export default function Projects({ data = [], bg }: ProjectsI) {
	const isMatchedTarget = useMediaQuery(768);
	if (!isMatchedTarget) {
		return (
			<div
				id="image_wrapper_1"
				className={`h-[60vh] grid grid-cols-2 min-w-[100vw] image_wrapper image_wrapper_1 relative ${bg}`}>
				<div className="w-[100%]  bg-[#F8F8F8] flex justify-center items-center p-[5px]">
					<Image src={data[1]} alt="image" className="w-[90%]" />
				</div>
				<div className="w-[100%]  bg-[#25867f]  flex justify-center items-center p-[5px]">
					<Image src={data[0]} alt="image" className="w-[90%]" />
				</div>
				<div className="w-[100%]   bg-[#25867f]   flex justify-center items-center p-[5px]">
					<Image src={data[2]} alt="image" className="w-[90%]" />
				</div>
				<div className="w-[100%]   bg-[#F8F8F8] flex justify-center items-center p-[5px]">
					<Image src={data[3]} alt="image" className="w-[90%]" />
				</div>
				<div className="w-[100%]   bg-[#F8F8F8] flex justify-center items-center p-[5px]">
					<Image src={data[4]} alt="image" className="w-[90%]" />
				</div>
				<div className="w-[100%]   bg-[#25867f] flex justify-center items-center p-[5px]">
					<Image src={data[5]} alt="image" className="w-[90%]" />
				</div>
			</div>
		);
	}
	return (
		<div
			id="image_wrapper_1"
			className={`h-screen p-[100px] grid grid-cols-[30%_70%] gap-[30px] grid-rows-[40vh, 40vh] min-w-[100vw] image_wrapper image_wrapper_1 relative ${bg}`}>
			<div className="w-full row-span-1  bg-[#fcfaf5] flex justify-center items-center rounded-lg">
				<Image src={data[1]} alt="image" className="w-[90%]" />
			</div>
			<div className="w-full row-span-2 h-screen min-h-[80vh] max-h-[80vh]  bg-[#fcfaf5] flex justify-center items-center rounded-lg">
				<Image src={data[0]} alt="image" className="w-[90%]" />
			</div>
			<div className="w-full row-span-1  bg-[#fcfaf5] flex justify-center items-center rounded-lg">
				<Image src={data[2]} alt="image" className="w-[90%]" />
			</div>
		</div>
	);
}
