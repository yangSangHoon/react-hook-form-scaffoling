import { RouteComponentProps } from 'react-router';
import { useForm, Controller, FormProvider } from 'react-hook-form';
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
    // const {
    //     control,
    //     register,
    //     handleSubmit,
    //     watch,
    //     reset,
    //     getValues,
    //     formState: { errors }
    // } = useForm<FormData>();

    const methods = useForm<FormData>();

    const onSubmit = (data: FormData) => console.log(data);

    useEffect(() => {
        methods.reset({
            name: '양상훈',
            age: '41',
            contractId: 'sgegweg2324231wegewg',
            gender: 'male'
        });
    }, []);

    const [show, setShow] = React.useState(true);

    const handleGetValue = () => {
        const allData = getValues();
        const nameData = getValues('name');
        const listData = getValues(['name', 'gender']);

        console.log('allData', allData);
        console.log('nameData', nameData);
        console.log('listData', listData);
    };

    return (
        <MatchDetailStyle>
            <h1>기본 정보</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <table>
                        <tbody>
                            <tr>
                                <td className="ui-library">
                                    <label>이름</label>
                                    <div>
                                        <Input
                                            label="이름"
                                            name="name"
                                            validateOptions={{ required: true, max: 5 }}
                                            placeholder="이름을 입력해 주세요"
                                            explainByErrorTypes={[
                                                { type: 'pattern', explain: '영문만 입력 가능합니다.' },
                                                { type: 'required', explain: '계약 ID는 필수 값입니다.' }
                                            ]}
                                        ></Input>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {show && (
                                        <Input
                                            label="계약 ID"
                                            name="contractId"
                                            validateOptions={{ required: true, pattern: /^[A-Za-z]+$/i }}
                                            placeholder="영문만 입력 가능합니다."
                                            explainByErrorTypes={[
                                                { type: 'pattern', explain: '영문만 입력 가능합니다.' },
                                                { type: 'required', explain: '계약 ID는 필수 값입니다.' }
                                            ]}
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
                                    ></Select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input
                                        label="나이"
                                        name="age"
                                        validateOptions={{ min: 18, max: 999 }}
                                        placeholder="18~999세까지 입력 가능합니다."
                                        explainByErrorTypes={[
                                            { type: 'min', explain: '18이상으로 입력해 주세요' },
                                            { type: 'max', explain: '999세 이하로 입력해 주세요.' }
                                        ]}
                                    ></Input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">저장</button>
                </form>
            </FormProvider>

            <button type="button" onClick={() => setShow(false)}>
                계약 ID 제거
            </button>

            <button type="button" onClick={handleGetValue}>
                getValue
            </button>
        </MatchDetailStyle>
    );
};

export default MatchDetail;
