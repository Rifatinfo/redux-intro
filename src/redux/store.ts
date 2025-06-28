import { configureStore } from "@reduxjs/toolkit";
import { logger } from "./middlewares.ts/logger";

export const store = configureStore({
    reducer : {},
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})