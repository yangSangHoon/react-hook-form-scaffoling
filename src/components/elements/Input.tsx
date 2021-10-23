import React, { LegacyRef, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import ExplainError from './ExplainError';

interface Props {
    label: string;
    name: string;
    register: any;
    validateOptions: any;
    explainByErrorTypes: Array<{ type: string; explain: string }>;
    errors: any;
}

const Input = React.forwardRef(
    ({ label, name, register, validateOptions, explainByErrorTypes, errors }: Props, ref: LegacyRef<HTMLSelectElement> | undefined): ReactElement => {
        return (
            <>
                <label>{label}</label>
                <div>
                    <input {...register(name, validateOptions)} />
                    <ExplainError explainByErrorTypes={explainByErrorTypes} errorType={errors[name]?.type}></ExplainError>
                </div>
            </>
        );
    }
);

export default Input;
