/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ToDo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToDoUpdateFormInputValues = {
    name?: string;
    description?: string;
    dueDate?: string;
    category?: string;
    finished?: boolean;
};
export declare type ToDoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    finished?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoUpdateFormOverridesProps = {
    ToDoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    finished?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ToDoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToDoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    toDo?: ToDo;
    onSubmit?: (fields: ToDoUpdateFormInputValues) => ToDoUpdateFormInputValues;
    onSuccess?: (fields: ToDoUpdateFormInputValues) => void;
    onError?: (fields: ToDoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToDoUpdateFormInputValues) => ToDoUpdateFormInputValues;
    onValidate?: ToDoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoUpdateForm(props: ToDoUpdateFormProps): React.ReactElement;
