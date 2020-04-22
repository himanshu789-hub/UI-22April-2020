import ILocationDTO, { LocationDTO } from "./Location";
import VehicleDTO from './Vehicle';

interface IOfferDTO{
	Id?: number;
	Active?: boolean;
	UserId: number;
	StartTime: Date;
	IsRideStarted: boolean;
	Discount: number;
	Source: ILocationDTO;
	Destination: ILocationDTO;
	CurrentLocation: ILocationDTO;
	PricePerKM: number;
	VehicleRef: number;
	MaxOfferSeats: number;
	Vehicle: VehicleDTO;
	SeatsAvailable:number;
    SeatsOffered:number;
	ViaPoints: Array<ILocationDTO>;
	TotalEarning:number;
}
export class OfferDTO implements IOfferDTO{
	TotalEarning: number;
	SeatsAvailable: number;
	SeatsOffered: number;
	Id?: number;
	Active?: boolean;
	UserId: number;
	StartTime: Date;
	IsRideStarted: boolean;
	Discount: number;
	Source: ILocationDTO;
	Destination: ILocationDTO;
	CurrentLocation: ILocationDTO;
	PricePerKM: number;
	VehicleRef: number;
	MaxOfferSeats: number;
	Vehicle: VehicleDTO;
	ViaPoints: Array<ILocationDTO>;
	constructor()
	{
		this.Source =  new LocationDTO();
		this.Destination = new LocationDTO();
		this.CurrentLocation = new LocationDTO();
		this.ViaPoints = new Array<ILocationDTO>();
		this.ViaPoints.push(new LocationDTO());
	    this.Vehicle = new VehicleDTO();
	}
}


export default IOfferDTO;