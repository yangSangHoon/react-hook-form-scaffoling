import { ProjectModel } from '~/api/model/response/projectResponse';
import { ListModel } from '~/api/model/response/responseModel';

export const projectsMapper = (response: any): ListModel<ProjectModel> => ({
    total: response.count.total,
    rows: response.rows.map((item: any) => projectMapper(item))
});

export const projectMapper = (response: any): ProjectModel => ({
    id: response.id,
    title: response.title
});
