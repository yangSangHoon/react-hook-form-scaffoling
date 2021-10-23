import { RouteComponentProps } from 'react-router';
import { useForm } from 'react-hook-form';
import MatchDetailStyle from './MatchDetailStyle';
import React from 'react';
import Input from '~/components/elements/Input';
import Select from '~/components/elements/Select';

interface Params {
    id: string;
}

interface DefaultInfo {
    id: string;
    contractId: string;
    gender: boolean;
}

const MatchDetail: React.VFC<RouteComponentProps<Params>> = ({ match }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: DefaultInfo) => console.log(data);

    /*
        name  마다 리랜더링
    */
    const name = watch('name');
    console.log(name);

    console.log('errors', errors);

    return (
        <MatchDetailStyle>
            <h1>기본 정보</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    label="이름"
                                    name="name"
                                    register={register}
                                    validateOptions={{ required: true, maxLength: 4 }}
                                    explainByErrorTypes={[
                                        { type: 'maxLength', explain: '4글자 이하로 입력해 주세요.' },
                                        { type: 'required', explain: '이름은 필수 값입니다.' }
                                    ]}
                                    errors={errors}
                                ></Input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="계약 ID"
                                    name="contractId"
                                    register={register}
                                    validateOptions={{ required: true, pattern: /^[A-Za-z]+$/i }}
                                    explainByErrorTypes={[
                                        { type: 'pattern', explain: '영문만 입력 가능합니다.' },
                                        { type: 'required', explain: '계약 ID는 필수 값입니다.' }
                                    ]}
                                    errors={errors}
                                ></Input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="성별"
                                    name="contractId"
                                    options={[
                                        { value: '', text: '선택' },
                                        { value: 'female', text: 'female' },
                                        { value: 'male', text: 'male' },
                                        { value: 'other', text: 'other' }
                                    ]}
                                    explainByErrorTypes={[{ type: 'required', explain: '성별을 선택해주세요.' }]}
                                    errors={errors}
                                ></Select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input
                                    label="나이"
                                    name="age"
                                    register={register}
                                    validateOptions={{ min: 18, max: 999 }}
                                    explainByErrorTypes={[
                                        { type: 'min', explain: '18이상으로 입력해 주세요' },
                                        { type: 'max', explain: '999세 이하로 입력해 주세요.' }
                                    ]}
                                    errors={errors}
                                ></Input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">저장</button>
            </form>
        </MatchDetailStyle>
    );
};

export default MatchDetail;
