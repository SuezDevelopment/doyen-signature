import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@/hooks/redux';

import {hideCall2Order} from '@/redux-store/reducers/cart';
import {endRouting, startRouting} from '@/redux-store/reducers/app';

export default function RouterListener() {
	const router = useRouter();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const handleStart = () => {
			dispatch(hideCall2Order());
			dispatch(startRouting());
		};
		const handleComplete = () => dispatch(endRouting());

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router.events]);//eslint-disable-line

	return null;
}