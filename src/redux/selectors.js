export const selectCampers = state => state.catalog.items

export const selectFavoriteCampers = state => state.catalog.favoriteList;

export const selectIsLoading = state => state.catalog.isLoading;