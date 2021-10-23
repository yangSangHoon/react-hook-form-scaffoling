import { RouteComponentProps } from 'react-router';
import { useForm } from 'react-hook-form';
import MatchDetailStyle from './MatchDetailStyle';

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
                                <label>이름</label>
                                <div>
                                    <input type="text" {...register('name', { required: true, maxLength: 4 })}></input>
                                    {errors.name?.type === 'maxLength' && <div className="error">4글자 이하로 입력해 주세요.</div>}
                                    {errors.name?.type === 'required' && <div className="error">이름은 필수 값입니다.</div>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>계약 ID</label>
                                <div>
                                    <input type="text" {...register('contractId', { required: true, pattern: /^[A-Za-z]+$/i })}></input>
                                    {errors.contractId?.type === 'pattern' && <div className="error">영문만 입력 가능합니다.</div>}
                                    {errors.contractId?.type === 'required' && <div className="error">계약 ID는 필수 값입니다.</div>}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>성별</label>
                                <div>
                                    <select {...register('gender')}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>나이</label>
                                <div>
                                    <input type="number" {...register('age', { min: 18, max: 999 })} />
                                    {errors.age?.type === 'min' && <div className="error">18이상으로 입력해 주세요.</div>}
                                    {errors.age?.type === 'max' && <div className="error">999세 이하로 입력해 주세요</div>}
                                </div>
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
