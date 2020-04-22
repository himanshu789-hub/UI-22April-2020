export  interface IUpdateLocationInfo {
    OfferId: number;
    ReachedLocation: string
}
export interface IOfferInfo {
    OfferId: number;
}
export interface IAutoSuggestInfo {
    query: string;
    maxResults: string;
    userCircularMapView: string,
    includeEntityTypes: string,
    userRegion: string,
    countryFilter: string,
    key: string,
}
export interface IBookingRequestInfo {
    Source: string,
    Destination: string,
    SeatsRequired: number,
};