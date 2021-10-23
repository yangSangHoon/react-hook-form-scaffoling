import { useState } from 'react';
import { getProject, postProject, putProject, deletetProject } from '../index';
import { useMutation, UseMutationResult, useQuery, useQueryClient } from 'react-query';
import { BaseError } from '~/api/model/response/errorModel';
import { CommonResponse } from '~/api/model/response/responseModel';
import { ProjectRequestModel } from '~/api/model/request/projectRequest';
import QueryId from './QueryId';
import { ProjectModel } from '../model/response/projectResponse';

function useProjectQuery() {
    /*
      로컬 데이타 관리
    */
    const [projectDetail, setProjectDetail] = useState<ProjectModel>();

    const usePostProject: UseMutationResult<CommonResponse, BaseError, ProjectRequestModel> = useMutation(postProject, {
        onSuccess: () => {}
    });

    const usePutProject: UseMutationResult<CommonResponse, BaseError, ProjectRequestModel> = useMutation(putProject, {
        onSuccess: () => {}
    });

    const useDeletetProject: UseMutationResult<CommonResponse, BaseError, number> = useMutation(deletetProject, {
        onSuccess: () => {}
    });

    /*
      프로젝트 정보 받기
    */
    const getProjectQuery = (id: number) => {
        return useQuery<ProjectModel>(
            QueryId.Project,
            async () => {
                const response: ProjectModel = await getProject(id);
                setProjectDetail(response);
                return response;
            },
            {
                refetchOnWindowFocus: false,
                cacheTime: 0
            }
        );
    };

    /*
      프로젝트 정보 생성
    */
    const postProjectQuery = (data: ProjectRequestModel) => {
        usePostProject.mutateAsync(data);
    };

    /*
      프로젝트 정보 업데이트
    */
    const putProjectQuery = (data: ProjectRequestModel) => {
        usePutProject.mutateAsync(data);
    };

    /*
      프로젝트 정보 삭제
    */
    const deleteProjectQuery = (projectId: number) => {
        useDeletetProject.mutateAsync(projectId);
    };

    /*
      로컬 데이타만 업데이트
    */
    const localUpdate = (data: ProjectModel) => {
        setProjectDetail({ ...projectDetail, ...data });
    };

    return {
        projectDetail,
        getProjectQuery,
        postProjectQuery,
        putProjectQuery,
        deleteProjectQuery,
        localUpdate
    };
}

export default useProjectQuery;
