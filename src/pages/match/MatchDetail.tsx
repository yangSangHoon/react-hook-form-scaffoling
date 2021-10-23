import { RouteComponentProps } from 'react-router';
import MatchDetailStyle from './MatchDetailStyle';
import { useForm } from 'react-hook-form';

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

    return (
        <article css={MatchDetailStyle}>
            <h1>기본 정보</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr>
                            <td>이름</td>
                            <td>
                                <input type="text" {...register('name')}></input>
                            </td>
                        </tr>
                        <tr>
                            <td>계약 ID</td>
                            <td>
                                <input type="text" {...register('contractId', { required: true })}></input>
                                {errors.contractId && <div className="error">계약 ID는 필수 값입니다.</div>}
                            </td>
                        </tr>
                        <tr>
                            <td>성별</td>
                            <td>
                                <select {...register('gender')}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>프리랜서 명</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>프로젝트 명</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>직군 / 직무</td>
                            <td>
                                <input type="text"></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">저장</button>
            </form>
        </article>
    );
};

export default MatchDetail;
