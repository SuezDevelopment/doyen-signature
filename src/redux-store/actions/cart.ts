import {
	setCartInited,
	setCartSubmitting,
	setCartTotal, setInitStatus,
	showCall2Order,
	showVariantModal,
	TCartInited
} from '../reducers/cart';

import Cookie from 'js-cookie';
import {AppThunk} from '../store';

export const initCart = (): AppThunk => async (dispatch, getState) => {
    const {cartInited} = getState().cart;
    if ([TCartInited.yes, TCartInited.processing].includes(cartInited)) {
		return;
	}

    dispatch(setInitStatus(TCartInited.processing));
	try {
		const cartInfo = await getCartByCookieOrRetrieve();
		Cookie.set('ds_cart_id', cartInfo.id, {expires: 365, sameSite: 'None', secure: true});

		dispatch(setCartInited(cartInfo));
	} catch (err) {
		console.error(err);
		dispatch(setInitStatus(TCartInited.no));
	}
}

export const getCartByCookieOrRetrieve = async () => {
    const cartId = Cookie.get('ds_cart_id');

}

export const addItem2Cart = (itemId: number, qty: number = 1, callToOrder: boolean = true): AppThunk => async (dispatch, getState) => {
    try {

    } catch (err) {
        console.error(err);
    }
}