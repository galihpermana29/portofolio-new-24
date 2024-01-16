import textureBlog from '@/public/texture-blog.png';
import Image from 'next/image';
import Link from 'next/link';

import blog1 from '@/public/blog1.png';
import blog2 from '@/public/blog2.png';
import blog3 from '@/public/blog3.png';
import blog4 from '@/public/blog4.png';
import { useMediaQuery } from '@/utils/hooks/useMediaQuery';
const dataBlog = [
	{
		color: 'bg-[#1D1B26]',
		title:
			'Shifting the Paradigm: A Fresh Approach to Time Management and How to Implement It as College Student',
		date: 'Dec 30, 2023',
		link: 'https://medium.com/@galihcbn123/shifting-the-paradigm-a-fresh-approach-to-time-management-and-how-to-implement-it-as-college-df7efaec8288',
		img: blog1,
	},
	{
		color: 'bg-[#1B2625]',
		title:
			'How Smart Do You Think You Are to Win Online Gambling/Slot? Decoding the Algorithms Behind the Scenes',
		date: 'Dec 26, 2023',
		link: 'https://medium.com/@galihcbn123/how-smart-do-you-think-you-are-to-win-online-gambling-slot-291658399ae9',
		img: blog2,
	},
	{
		color: 'bg-[#261E1B]',
		title: 'What Has Changed In Me, Before and After College?',
		date: 'Dec 24, 2023',
		link: 'https://medium.com/@galihcbn123/what-has-changed-in-me-before-and-after-college-b145a3bbbf69',
		img: blog3,
	},
	{
		color: 'bg-[#261B24]',
		title:
			'4 Reasons Why Campus Organizations Are No Longer As Popular with Students as They Used To Be',
		date: 'Dec 21, 2023',
		link: 'https://medium.com/@galihcbn123/4-reasons-why-campus-organizations-are-no-longer-as-popular-with-students-as-they-used-to-be-eff71a29445a',
		img: blog4,
	},
];

export default function Blogs() {
	const isMatchedTarget = useMediaQuery(768);
	if (!isMatchedTarget) {
		return (
			<div
				id="image_wrapper_3"
				className="flex flex-col min-w-[100vw] image_wrapper_3 image_wrapper justify-start items-center">
				{dataBlog.map((val, idx) => (
					<div
						key={idx}
						className="flex justify-center items-start overflow-hidden w-full flex-1 border-t-[0.1px]">
						<div className={`w-full bg-cover bg-[#1D1B26] p-[30px]`}>
							<div className="flex flex-col justify-between h-full overflow-hidden">
								<div className="text-white text-[14px] poppins min-w-[200px] max-w-[300px]">
									{val.title}
								</div>
								<Link
									target="_blank"
									href={val.link}
									className="text-[#646464] text-[14px] poppins underline mt-[10px]">
									Read
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div>
			<div
				id="image_wrapper_3"
				className="grid h-screen grid-cols-2 min-w-[100vw] image_wrapper_3 image_wrapper m-auto justify-center items-center px-[10%] py-[50px]">
				{dataBlog.map((val, idx) => (
					<div
						key={idx}
						className="flex justify-center items-center overflow-hidden">
						<div
							className={`w-full min-h-[350px] lg:max-h-[350px] 2xl:max-h-[400px] bg-cover ${val.color} px-[30px]`}>
							<div className="flex flex-col justify-between h-full gap-[20px] mt-[20px] overflow-hidden">
								<div className="text-white text-[19px] poppins">
									{val.title}
								</div>
								<Link
									target="_blank"
									href={val.link}
									className="text-[#646464] text-[13px] poppins underline">
									Read
								</Link>
								<div>
									<Image src={val.img} alt="img" />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
