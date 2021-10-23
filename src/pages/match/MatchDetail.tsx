import { RouteComponentProps } from 'react-router';
import MatchDetailStyle from './MatchDetailStyle';

interface Params {
    id: string;
}

const MatchDetail: React.VFC<RouteComponentProps<Params>> = ({ match }) => {
    return (
        <article css={MatchDetailStyle}>
            <h1>기본 정보</h1>
            <table>
                <tbody>
                    <tr>
                        <td>분류</td>
                        <td>
                            <input type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>계약 ID</td>
                        <td>
                            <input type="text"></input>
                        </td>
                    </tr>
                    <tr>
                        <td>클라이언트 명</td>
                        <td>
                            <input type="text"></input>
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
        </article>
    );
};

export default MatchDetail;
