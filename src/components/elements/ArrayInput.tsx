import React, { LegacyRef, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import ExplainError from './ExplainError';
import InputStyle from './InputStyle.tsx';
import { useFormContext } from 'react-hook-form';

interface Props {
    label?: string;
    name?: string;
    validateOptions?: any;
    explainByErrorTypes?: Array<{ type: string; explain: string }>;
    placeholder?: string;
}

const ArrayInput = React.forwardRef(
    ({ label, name, validateOptions, explainByErrorTypes, placeholder }: Props, ref: LegacyRef<HTMLSelectElement> | undefined): ReactElement => {
        const { control } = useFormContext();
        const { fields } = useFieldArray({
            name: `hobbys`,
            control
        });

        const handleGetValue = () => {
            const nameData = getValues(name);
            console.log('nameData', nameData);
        };

        return (
            <InputStyle>
                <label>{label}</label>
                <div>
                    <input {...register(name, validateOptions)} placeholder={placeholder} onChange={handleGetValue} />
                    {explainByErrorTypes && <ExplainError explainByErrorTypes={explainByErrorTypes} name={name}></ExplainError>}
                </div>
            </InputStyle>
        );
    }
);

export default ArrayInput;
