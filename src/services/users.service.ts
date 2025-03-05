import { IUser } from "../interfaces/user.interface";
import { IServiceUsers } from "../interfaces/user.iservice";



export const UsersService: IServiceUsers={
    listAllUsers: function (): IUser[] | object {
        throw new Error("Function not implemented.");
    },
    getUserById: function (id: number): IUser | object {
        throw new Error("Function not implemented.");
    },
    addUser: function (data: Omit<IUser, "id">, id: number): object {
        throw new Error("Function not implemented.");
    },
    deleteUserId: function (id: number): object {
        throw new Error("Function not implemented.");
    }
}