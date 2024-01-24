'use client';
import Image from 'next/image';
import lineImage from '@/public/line.png';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';

interface ProjectTitleI {
	refSection?: any;
}

export default function ProjectTitle({ refSection }: ProjectTitleI) {
	const isMatchedTarget = useMediaQuery(768);

	if (!isMatchedTarget) {
		return (
			<div
				id="image_wrapper_2"
				className="max-h-[70vh] bg-[#fcfaf5] bg-cover relative overflow-hidden min-w-[100vw] image_wrapper_2 image_wrapper ">
				<div className="h-[70vh] flex justify-center items-center">
					<div className="mb-[50px] px-[7%]">
						<div className="libre italic text-[25px] mb-[30px]">
							Things {"I've"} Done
						</div>
						<div className="text-[30px] max-w-[700px]" ref={refSection}>
							Referes to all of previous works as a professional frontend
							developer
						</div>
					</div>
				</div>
				<div className="absolute top-0 w-full flex justify-center z-[1] h-screen">
					<Image src={lineImage} width={3000} height={3000} alt="line" />
				</div>
				<div className="libre text-[100px] italic absolute bottom-0 left-0 right-0 text-center text-[#D7D7D7]">
					Project
				</div>
			</div>
		);
	}
	return (
		<div
			id="image_wrapper_2"
			className="min-h-[100vh] bg-[#fcfaf5] bg-cover relative overflow-hidden min-w-[100vw] image_wrapper_2 image_wrapper ">
			<div className=" h-screen flex justify-center items-center">
				<div className="mb-[100px]">
					<div className="libre italic text-[30px] mb-[30px]">
						Things {"I've"} Done
					</div>
					<div
						ref={refSection}
						className="text-[55px] max-w-[700px] reveal-type">
						Refers to all of previous works as a professional frontend developer
					</div>
				</div>
			</div>
			<div className="absolute top-0 w-full flex justify-center z-[1]">
				<Image src={lineImage} width={3000} height={3000} alt="line" />
			</div>
			<div className="libre text-[250px] italic absolute bottom-[-100px] left-0 right-0 text-center text-[#D7D7D7]">
				Projects
			</div>
		</div>
	);
}
