export interface Cuestions{
    id: number
    cuestion: string;
    isResponse: boolean;
    focuse: boolean;
    responce?: string;
};

export interface DataUser{
    nombre: string;
    segundo_nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
};

export interface DataContact{
    email: string;
    phone: string;
};

