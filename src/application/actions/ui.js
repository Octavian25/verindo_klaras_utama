export const PAGE_LOADED = '[ui] page loaded';
export const PAGE_LOADING_ON = '[ui] page loading on';
export const PAGE_LOADED_OFF = '[ui] page loading off';



export const pageLoaded = {
    type : PAGE_LOADED,
}

export const setLoading = isLoading => ({
    type : isLoading ? PAGE_LOADING_ON : PAGE_LOADED_OFF,
    payload : isLoading
})

