import useProjectQuery from '~/api/query/useProjectQuery';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { ProjectRequestModel } from '~/api/model/request/projectRequest';
import { ProjectModel } from '~/api/model/response/projectResponse';

function My(): ReactElement {
    const {
        formState: { errors },
        handleSubmit
    } = useForm<FormData>();

    const { getProjectQuery, localUpdate, projectDetail } = useProjectQuery();

    getProjectQuery(12);

    /*
        로컬 캐시 만 업데이트
    */
    const onLocalUpdate = (changedData: ProjectModel) => {
        localUpdate(changedData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onLocalUpdate)}>
                <input type="hidden" value={projectDetail?.id} />
                <h1>
                    관심프로젝트 : <input type="checkbox" checked={projectDetail?.like} />
                </h1>
                <button type="submit">좋아요</button>
            </form>
        </div>
    );
}

export default My;
