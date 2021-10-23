import { get, post, put, del } from './client';
import { projectsMapper, projectMapper } from './mapper/projectMapper';
import { ProjectListRequestModel, ProjectRequestModel } from './model/request/projectRequest';
import { ProjectModel } from './model/response/projectResponse';

export const basePath = `https://${import.meta.env.SERVER_TYPE}.wanted.co.kr/gigs/`;
export const baseUrl = `https://nextweek.wanted.co.kr/gigs/api-v2/admin/`;

const projectURL = `${baseUrl}project`;

export const getProject = async (id: number): Promise<ProjectModel> => {
    const response = await get(`${projectURL}/${id}`);
    return projectMapper(response.data);
};

export const postProject = async (data: ProjectRequestModel) => {
    const response = await post(`${projectURL}`, data);
    return response.data;
};

export const putProject = async (data: ProjectRequestModel) => {
    const response = await put(`${projectURL}/${data.id}`, data);
    return response.data;
};

export const deletetProject = async (id: number) => {
    const response = await del(`${projectURL}/${id}`);
    return response.data;
};

export const getProjects = async (params: ProjectListRequestModel) => {
    const response = await get(`${projectURL}s`, params);
    return projectsMapper(response.data);
};
