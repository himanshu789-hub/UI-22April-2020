import axios, { AxiosResponse } from 'axios';
import { UploadServer, APIServer } from '../constant/connection';
import IUserDTO from '../models/User';
import { injectable } from 'inversify';

export default interface IUserService {
    GeyUserById: (Id: number) => Promise<AxiosResponse<IUserDTO>>;
    GetImage: (ImageName: string) => Promise<AxiosResponse<ArrayBuffer>>;
    Delete: (Id: number) => Promise<AxiosResponse<boolean>>;
    Update: (User: IUserDTO) => Promise<AxiosResponse<IUserDTO>>;
    Create: (User: IUserDTO) => Promise<AxiosResponse<IUserDTO>>;
    LogIn: (EmailId: string, Password: string) => Promise<AxiosResponse<IUserDTO>>;
    UploadImage:(data:FormData)=>Promise<AxiosResponse<string>>;
}

@injectable()
export class UserService implements IUserService {

    UploadImage= (data: FormData) : Promise<AxiosResponse<string>>=>{
     return axios.post(UploadServer+'upload',data);
    }
    LogIn = (EmailId: string, Password: string): Promise<AxiosResponse<IUserDTO>> => {
        return axios.get(APIServer + "User/LogIn", {params: { emaildId: EmailId, password: Password }});
    }
    GeyUserById = (Id: number): Promise<AxiosResponse<IUserDTO>> => {
        return axios.get(APIServer + 'User/GetById', { params: { id: Id } });
    }
    GetImage = (ImageName: string): Promise<AxiosResponse<ArrayBuffer>> => {
        return axios.get(UploadServer + 'getProfileImage/' + ImageName, { responseType: 'arraybuffer' });
    }
    Delete = (Id: number): Promise<AxiosResponse<boolean>> => {
        return axios.delete(APIServer + "User/Delete", { params: { userId: Id } });
    }
    Update = (User: IUserDTO): Promise<AxiosResponse<IUserDTO>> => {
        return axios.put(APIServer + "Users/Update", User);
    }
    Create = (User: IUserDTO): Promise<AxiosResponse<IUserDTO>> => {
        return axios.put(APIServer + 'User/Create', User);
    }
    
}