import { SVGProps } from "react";

export type User = {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    isEmailConfirmed?: boolean;
    createdDate: Date | string;
    role: string;
    userName?: string;
    nif?: number;
    birthDate?: Date | string;
    image?: string | File | any;
}


export type FileUploadResponse = {
    message: string;
    success: boolean;
    errorCode: number;
}

export type TextInputProps = {
    value: string;
    setValue: any;
    iconType?: string;
    placeholder: string;
}

export type ProviderAuthButtonType = {
    providerText: string;
    onClick: any;
}