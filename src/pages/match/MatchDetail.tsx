import { RouteComponentProps } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import MatchDetailStyle from './MatchDetailStyle';
import React from 'react';
import Input from '~/components/elements/Input';
import Select from '~/components/elements/Select';
import MeterialInput from '@material-ui/core/Input';
import { useEffect } from 'react';

interface Params {
    id: string;
}

interface FormData {
    id: string;
    name: string;
    contractId: string;
    gender: boolean;
    age: number;
}

const MatchDetail: React.VFC<RouteComponentProps<Params>> = ({ match }) => {
    const {
        control,
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => console.log(data);

    useEffect(() => {
        reset({
            name: '양상훈',
            age: '41',
            contractId: 'sgegweg2324231wegewg',
            gender: 'male'
        });
    }, []);

    const [show, setShow] = React.useState(true);

    return (
        <MatchDetailStyle>
            <h1>기본 정보</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr>
                            <td className="ui-library">
                                {/* <Input
                                    label="이름"
                                    name="name"
                                    register={register}
                                    validateOptions={{ required: true, maxLength: 4 }}
                                    explainByErrorTypes={[
                                        { type: 'maxLength', explain: '4글자 이하로 입력해 주세요.' },
                                        { type: 'required', explain: '이름은 필수 값입니다.' }
                                    ]}
                                    errors={errors}
                                ></Input> */}
                                <label>이름</label>
                                <div>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: true, max: 5 }}
                                        render={({ field }) => <MeterialInput {...field} />}
                                    />
                                    {errors?.name?.type === 'required' && <div className="error">이름은 필수 값입니다.</div>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {show && (
                                    <Input
                                        label="계약 ID"
                                        name="contractId"
                                        register={register}
                                        validateOptions={{ required: true, pattern: /^[A-Za-z]+$/i }}
                                        placeholder="영문만 입력 가능합니다."
                                        explainByErrorTypes={[
                                            { type: 'pattern', explain: '영문만 입력 가능합니다.' },
                                            { type: 'required', explain: '계약 ID는 필수 값입니다.' }
                                        ]}
                                        errors={errors}
                                    ></Input>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Select
                                    label="성별"
                                    name="gender"
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
                                    placeholder="18~999세까지 입력 가능합니다."
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

            <button type="button" onClick={() => setShow(false)}>
                계약 ID 제거
            </button>
        </MatchDetailStyle>
    );
};

export default MatchDetail;
