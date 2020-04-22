import { Container } from "react-inversify";
import IBookingService,{  BookingService } from '../services/BookingService';
import IUserService, { UserService } from "../services/UserService";
import { ConstBookingService,ConstLocationService,ConstOfferService,ConstUserService, ConstAutoSuggestService } from "../constant/injection";
import IOfferService, { OfferService } from "../services/OfferService";
import ILocationService, { LocationService } from "../services/LocationService";
import IAutoSuggestService, { AutoSuggestService } from "../services/AutoSuggestService";

export let container = new Container();
container.bind<IBookingService>(ConstBookingService).to(BookingService);
container.bind<IUserService>(ConstUserService).to(UserService);
container.bind<IOfferService>(ConstOfferService).to(OfferService);
container.bind<ILocationService>(ConstLocationService).to(LocationService);
container.bind<IAutoSuggestService>(ConstAutoSuggestService).to(AutoSuggestService);