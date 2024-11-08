export interface ISignupForm {
    submitForm: (data: ISignupData) => void;
}

export interface ISignupData {
    email: string;
    password: string;
    country: string;
}