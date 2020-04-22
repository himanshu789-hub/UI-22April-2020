interface IVehicle {
    NumberPlate: string;
    Type: string;
    Capacity: number;
}
class VehicleDTO implements IVehicle{
    NumberPlate: string;
    Type: string;
    Capacity: number;
    
}
export default VehicleDTO;