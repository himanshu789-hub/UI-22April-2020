import OfferDTO from "../models/Offerring";
import axios, { AxiosResponse } from 'axios';
import { APIServer } from "../constant/connection";
import { injectable } from "react-inversify";
import { IOfferInfo, IUpdateLocationInfo, IBookingRequestInfo } from "../interfaces/interfaces";
import IOfferDTO from "../models/Offerring";

export default interface IOfferService {
    IsUnderOfferring: (UserId: number) => Promise<AxiosResponse<boolean>>;
    GetById: (OfferId: number) => Promise<AxiosResponse<OfferDTO>>;
    Delete: (OfferInfo: IOfferInfo) => Promise<AxiosResponse<boolean>>;
    GetAllByUserId: (UserId: number) => Promise<AxiosResponse<Array<OfferDTO>>>;
    StartRide: (OfferInfo: IOfferInfo) => Promise<AxiosResponse<boolean>>;
    UpdateLocation: (UpdateOfferInfo: IUpdateLocationInfo) => Promise<AxiosResponse<boolean>>;
    HandleNextLocation: (OfferInfo: IOfferInfo) => Promise<AxiosResponse<string>>;
    Update: (OfferDTO: IOfferDTO) => Promise<AxiosResponse<OfferDTO>>;
    Create: (OfferDTO: IOfferDTO) => Promise<AxiosResponse<OfferDTO>>;
    GetByEndPonits: (BookingRequestInfo: IBookingRequestInfo) => Promise<AxiosResponse<Array<OfferDTO>>>;
}

@injectable()
export class OfferService implements IOfferService {
    IsUnderOfferring = (UserId: number): Promise<AxiosResponse<boolean>> => {
        return axios.get(APIServer + 'Offerring/IsOfferredRide', { params: { userId: UserId } });
    }
    Delete = (OfferInfo: IOfferInfo): Promise<AxiosResponse<boolean>> => {
        const payload = new String(JSON.stringify(OfferInfo));
        return axios.delete(APIServer + 'Offerring/Delete', { data: payload });
    }
    GetById = (OfferId: number): Promise<AxiosResponse<OfferDTO>> => {
        return axios.get(APIServer + 'Offerring/GetById', { params: { id: OfferId } });
    }
    GetAllByUserId = (UserId: number): Promise<AxiosResponse<Array<OfferDTO>>> => {
        return axios.get(APIServer + 'Offerring/GetByUserId', { params: { userId: UserId } });
    }
    UpdateOfferLocation = (UpdateLocationInfo: IUpdateLocationInfo): Promise<AxiosResponse<boolean>> => {
        const payload: String = new String(JSON.stringify(UpdateLocationInfo));
        return axios.put(APIServer + 'Offerring/updateLocation', payload);
    }
    HandleNextLocation = (OfferInfo: IOfferInfo): Promise<AxiosResponse<string>> => {
        const payload: String = new String(JSON.stringify(OfferInfo));
        return axios.put(APIServer + 'Offerring/handleNextLocation', payload);
    }
    StartRide(OfferInfo: IOfferInfo) {
        const payload: string = JSON.stringify(OfferInfo);
        return axios.put(APIServer + 'Offerring/StartRide', payload);
    }
    UpdateLocation = (UpdateLocationInfo: IUpdateLocationInfo): Promise<AxiosResponse<boolean>> => {
        const payload: String = new String(JSON.stringify(UpdateLocationInfo));
        return axios.put(APIServer + "Offerring/updateLocation", payload);
    }
    Update = (OfferDTO: IOfferDTO): Promise<AxiosResponse<OfferDTO>> => {
        return axios.put(APIServer + '/Offerring/Update', { data: { offerring: OfferDTO } });
    }

    Create = (OfferDTO: IOfferDTO): Promise<AxiosResponse<OfferDTO>> => {
        return axios.post(APIServer + '/Offerring/Create', { data: { offerring: OfferDTO } });
    }
    GetByEndPonits = (BookingRequestInfo: IBookingRequestInfo): Promise<AxiosResponse<Array<OfferDTO>>>=>
    {
        const payload: String = new String(JSON.stringify(BookingRequestInfo));
        return axios.get(APIServer + 'Offerring/GetByEndPoints', { params: { form: payload, headers: { 'Content-Type': 'application/json' } } });
    }

}
