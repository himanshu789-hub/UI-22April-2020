import axios, { AxiosResponse } from 'axios';
import { injectable } from 'react-inversify';
export default interface ILocationService
{
    ApiKey:string;
    GetCoordinates:(Place:string)=>Promise<AxiosResponse<any>>;
}
@injectable()
export class LocationService implements ILocationService 
{
    ApiKey:string;
    GetCoordinates=(Place:string):Promise<AxiosResponse<any>>=>{
        var query = {
            countryRegion: 'IN',
            addressLine: Place,
            key: this.ApiKey,
        };
        return axios.get('http://dev.virtualearth.net/REST/v1/Locations', {
                params: { ...query },
            });
    }
    constructor()
    {
        this.ApiKey = 'Aq2eQ5lQBt_m1lBEQ5bFbFnP1b27g27lNGxqFCt_gtpXtmoSsEXVWw7aYfUh_Cvf'; 
    }
}