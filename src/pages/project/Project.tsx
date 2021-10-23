import useProjectQuery from '~/api/query/useProjectQuery';
import { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ProjectModel } from '~/api/model/response/projectResponse';

function Project(): ReactElement {
    const {
        formState: { errors },
        handleSubmit
    } = useForm<FormData>();

    const { getProjectQuery, putProjectQuery, localUpdate, projectDetail } = useProjectQuery();

    /*
        페이지 진입시 프로젝트 정보 호출
    */
    useEffect(() => {
        getProjectQuery(12);
    }, []);

    /*
        서버 업데이트
    */
    const onSubmit = (changedData: ProjectModel) => {
        putProjectQuery({ id: changedData.id, title: changedData.title });
    };

    /*
        로컬 캐시 만 업데이트
    */
    const handleLike = () => {
        localUpdate({ like: true });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" value={projectDetail?.id} />
                <h1>
                    제목 : <input type="text" value={projectDetail?.title} />
                </h1>
                <button type="submit">수정</button>
            </form>

            <button type="button" onClick={handleLike}>
                관심 프로젝트
            </button>
        </div>
    );
}

export default Project;
