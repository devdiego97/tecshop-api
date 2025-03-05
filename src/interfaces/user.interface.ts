


export interface IUser{
    id:number,
    name:string,
    email:string,
    lastName:string,
    password:string
    type:'admin' | 'client'
}