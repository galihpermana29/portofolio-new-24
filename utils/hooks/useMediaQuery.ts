import { useCallback, useEffect, useState } from 'react';

export const useMediaQuery = (width: number): boolean => {
	const [targetReached, setTargetReached] = useState<any>(true);

	const updateTarget = useCallback((e: MediaQueryListEvent) => {
		if (e.matches) setTargetReached(true);
		else setTargetReached(false);
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${width}px)`);
		media.addEventListener('change', updateTarget);
		// Check on mount (callback is not called until a change occurs)
		if (media.matches) setTargetReached(true);
		else setTargetReached(false);
		return () => media.removeEventListener('change', updateTarget);
	}, [targetReached]);

	return targetReached;
};
