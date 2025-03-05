import { IUser } from "./user.interface"


export interface IServiceUsers{
 listAllUsers:()=>IUser[] | object,
 getUserById:(id:number)=>IUser | object,
 addUser : (data:Omit<IUser,"id">,id:number)=>object
 deleteUserId:(id:number)=>object
}