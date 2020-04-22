 interface IUserDTO{
  EmailId: string;
  Name: string;
  Id?: number;
  Active?: boolean;
  ImageUploadedName: string;
  Age: number;
  Gender: string;
  Password?: string;
}
export class UserDTO implements IUserDTO {
  EmailId: string;
  Name: string;
  Id?: number;
  Active?: boolean;
  ImageUploadedName: string;
  Age: number;
  Gender: string;
  Password?:string;
}

export default IUserDTO;