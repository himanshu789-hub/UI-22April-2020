import  ILocationDTO, { LocationDTO }  from "./Location";

export interface IBookDTO {
	Id?:number,
	Source: ILocationDTO,
	Destination: ILocationDTO,
	BookingStatus: number,
	FarePrice: number,
	DateTime: Date,
	EndTime: Date,
	UserId: number,
	OfferId: number,
	SeatsRequired: number,
}

export class BookDTO implements IBookDTO{
	Id?:number;
	Source: ILocationDTO;	
	Destination: ILocationDTO;
	BookingStatus: number;
	FarePrice: number;
	DateTime: Date;
	EndTime: Date;
	UserId: number;
	OfferId: number;
	SeatsRequired: number;
	constructor()
	{
		this.Source=new LocationDTO();
        this.Destination= new LocationDTO();
	}
}

export default BookDTO;
