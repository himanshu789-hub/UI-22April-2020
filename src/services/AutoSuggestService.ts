import axios, { AxiosResponse } from 'axios';
import { injectable } from 'react-inversify';
export default interface IAutoSuggestService {
    APIKey: string;
    GetSuggestion: (Query: string) => Promise<AxiosResponse<any>>;
}

@injectable()
export class AutoSuggestService implements IAutoSuggestService {
    APIKey: string;
    GetSuggestion = (Query: string): Promise<AxiosResponse<any>> => {
        const lat = '22.7163528';
        const long = '75.8278007';
        const confidence_radius = '100000';
        var params = {
            query: Query ?? ' ',
            maxResults: '10',
            userCircularMapView: lat + ',' + long + ',' + confidence_radius,
            includeEntityTypes: 'Address',
            userRegion: 'IN',
            countryFilter: 'IN',
            key: this.APIKey,
        };
        debugger;
        return axios.get('http://dev.virtualearth.net/REST/v1/Autosuggest', {
            params,
        });
        
    }
    constructor(){
        this.APIKey = "Aq2eQ5lQBt_m1lBEQ5bFbFnP1b27g27lNGxqFCt_gtpXtmoSsEXVWw7aYfUh_Cvf";
    }
}