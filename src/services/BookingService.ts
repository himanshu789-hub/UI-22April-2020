import BookDTO, { IBookDTO } from '../models/Booking';
import axios, { AxiosResponse } from 'axios';
import { APIServer } from '../constant/connection';
import UserDTO from '../models/User';
import IBookingStatus from '../components/BookCard/interfaces/BookingStatus';
import { injectable } from 'react-inversify';

export default interface IBookingService {
   Create: (Book: IBookDTO) => Promise<AxiosResponse<IBookDTO>>;
   UpdateBookingStatus: (BookingStatus: IBookingStatus) => Promise<AxiosResponse<IBookDTO>>;
   GetAllByUserId: (UserId: number) => Promise<AxiosResponse<Array<IBookDTO>>>;
   GetAllOfferedRidesBooking: (UserId: number) => Promise<AxiosResponse<Array<IBookDTO>>>;
   IsUnderBooking:(UserId:number)=>Promise<AxiosResponse<boolean>>;
   GetById:(BookId:number)=>Promise<AxiosResponse<BookDTO>>;
}

@injectable()
export class BookingService implements IBookingService {
   Create = (Book: IBookDTO): Promise<AxiosResponse<IBookDTO>> => {
      return axios.post(APIServer + 'booking/create', Book);
   };
   UpdateBookingStatus = (BookingStatus: IBookingStatus): Promise<AxiosResponse<IBookDTO>> => {
      const payload: String = new String(JSON.stringify(BookingStatus));
      return axios.put(APIServer + 'booking/updatebookingstatus', payload);
   };
   //Doudt
   GetAllByUserId = (UserId: number) : Promise <AxiosResponse<Array<BookDTO>>> =>{
   return axios.get(APIServer+'booking/getbyUserId',{params:{userId:UserId}});
   }
   GetAllOfferedRidesBooking = (UserId: number): Promise<AxiosResponse<Array<BookDTO>>>=>{
      return axios.get(APIServer + 'booking/getallofferedrides', { params: { userId: UserId } });
   }
   IsUnderBooking=(Id:number):Promise<AxiosResponse<boolean>>=>{
      return axios.get(APIServer + 'Booking/IsUnderBooking', { params: { userId: Id } });
   }
   GetById=(BookId: number) : Promise<AxiosResponse<BookDTO>>=>{
      return axios
         .get(APIServer + 'Booking/getById', { params: { id: BookId } });
   }
}
