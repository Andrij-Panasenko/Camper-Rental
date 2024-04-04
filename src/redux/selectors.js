export const selectCampers = state => state.catalog.items

export const selectFavoriteCampers = state => state.catalog.favoriteList;

export const selectIsLoading = state => state.catalog.isLoading;

export const selectVehicleEquipFilters = state => state.filters.vehicleEquipment;

export const selectVehicleTypeFilters = state => state.filters.vehicleType;