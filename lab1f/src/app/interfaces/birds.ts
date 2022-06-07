export interface Birds {
    id:number;
    title:string;
    age:number;
    info:string;
    _links:{
        self: {
            href: string;
        },
        flower: {
            href: string;
        }
    }
}
