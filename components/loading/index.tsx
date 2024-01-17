export default function Loading() {
	return (
		<>
			<div className="loading">
				<img
					className="loading-image"
					src="https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"></img>
			</div>

			<svg className="mask" viewBox="0 0 100 100" preserveAspectRatio="none">
				<path
					className="path"
					fill="white"
					vector-effect="non-scaling-stroke"
					d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
				/>
			</svg>

			<div className="page">
				<img
					className="image"
					src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img>

				<img
					className="image"
					src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"></img>
			</div>
		</>
	);
}
