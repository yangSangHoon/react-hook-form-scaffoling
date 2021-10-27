import React, { LegacyRef, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import ExplainError from './ExplainError';
import InputStyle from './InputStyle.tsx';

interface Props {
    label?: string;
    name?: string;
    register?: any;
    validateOptions?: any;
    explainByErrorTypes?: Array<{ type: string; explain: string }>;
    errors?: any;
    placeholder?: string;
}

const Input = React.forwardRef(
    (
        { label, name, register, validateOptions, explainByErrorTypes, errors, placeholder }: Props,
        ref: LegacyRef<HTMLSelectElement> | undefined
    ): ReactElement => {
        return (
            <InputStyle>
                <label>{label}</label>
                <div>
                    <input {...register(name, validateOptions)} placeholder={placeholder} />
                    {explainByErrorTypes && <ExplainError explainByErrorTypes={explainByErrorTypes} errorType={errors[name]?.type}></ExplainError>}
                </div>
            </InputStyle>
        );
    }
);

export default Input;
