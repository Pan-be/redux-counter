import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter"
import authReducer from "./auth"

const store = configureStore({
	reducer: {
		counter: counterReducer,
		authenticator: authReducer,
	},
})

export default store
