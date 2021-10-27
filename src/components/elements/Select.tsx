import React, { LegacyRef, ReactElement } from 'react';
import ExplainError from './ExplainError';
import SelectStyle from './SelectStyle';

interface Props {
    name: string;
    label: string;
    explainByErrorTypes: Array<{ type: string; explain: string }>;
    errors: any;
    options: Array<{ value: string; text: string }>;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    onBlur?: React.FocusEventHandler<HTMLSelectElement>;
}

const Select = React.forwardRef(
    ({ name, label, explainByErrorTypes, errors, options, onChange, onBlur }: Props, ref: LegacyRef<HTMLSelectElement> | undefined): ReactElement => (
        <SelectStyle>
            <label>{label}</label>
            <div>
                <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
                    {options.map((option, index) => (
                        <option value={option.value} key={index}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <ExplainError explainByErrorTypes={explainByErrorTypes} errorType={errors[name]?.type}></ExplainError>
            </div>
        </SelectStyle>
    )
);

export default Select;
