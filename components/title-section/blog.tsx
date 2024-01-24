import Image from 'next/image';
import lineImage from '@/public/line.png';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
import { motion } from 'framer-motion';

interface ProjectTitleI {
	refSection?: any;
}
export default function BlogTitle({ refSection }: ProjectTitleI) {
	const isMatchedTarget = useMediaQuery(768);

	if (!isMatchedTarget) {
		return (
			<div>
				<div
					id="image_wrapper_4"
					className="max-h-[70vh] bg-[#2F2E2C] bg-cover relative overflow-hidden min-w-[100vw] image_wrapper_4 image_wrapper ">
					<div className=" h-[70vh] flex justify-center items-center">
						<div className="mb-[50px] px-[7%]">
							<div className="libre italic text-[25px] mb-[30px] text-[#fcfaf5]">
								Read My Thoughts
							</div>
							<div
								className="text-[30px] max-w-[700px] text-[#fcfaf5]"
								ref={refSection}>
								Refers to all of my articles i wrote in medium to share anything
								in my head
							</div>
						</div>
					</div>
					{/* <div className="absolute top-0 w-full flex justify-center z-[1] h-screen">
						<Image src={lineImage} width={3000} height={3000} alt="line" />
					</div> */}
					<div className="libre text-[100px] italic absolute bottom-[-20px] left-0 right-0 text-center text-[#201f1e]">
						Medium
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			id="image_wrapper_4"
			className="min-h-[100vh] bg-[#2F2E2C] bg-cover relative overflow-hidden min-w-[100vw] image_wrapper_4 image_wrapper">
			<div className=" h-screen flex justify-center items-center">
				<div className="mb-[100px]">
					<motion.div
						initial={{ y: -50, opacity: 0 }}
						whileInView={{
							y: 0,
							opacity: 1,
							transition: { delay: 0.5, ease: 'easeInOut' },
						}}
						className="libre italic text-[30px] mb-[30px] text-[#fcfaf5]">
						Read My Thoughts
					</motion.div>
					<div
						className="text-[70px] max-w-[900px] text-[#fcfaf5]"
						ref={refSection}>
						Refers to all of my articles i wrote in medium to share anything in
						my head
					</div>
				</div>
			</div>
			<div className="absolute top-0 w-full flex justify-center z-[1]">
				<Image src={lineImage} width={3000} height={3000} alt="line" />
			</div>
			<motion.div
				initial={{ x: 100, opacity: 0 }}
				whileInView={{
					x: 0,
					opacity: 1,
					transition: { delay: 1.5, ease: 'easeInOut' },
				}}
				className="libre text-[250px] italic absolute bottom-[-100px] left-0 right-0 text-center text-[#201f1e]">
				Medium
			</motion.div>
		</div>
	);
}
