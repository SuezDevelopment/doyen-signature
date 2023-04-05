import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {
    xhrReducers,
    cartReducers,
    alertReducers,
    appReducers,
} from './reducers'

export const store = configureStore({
    reducer: {
        app: appReducers,
        cart: cartReducers,
        alert: alertReducers,
        xhr: xhrReducers,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['Promise'],
				ignoredActionPaths: ['payload'],
				ignoredPaths: ['xhr.promises'],
			},
		})
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;