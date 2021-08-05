/* tslint:disable */
/* eslint-disable */
/**
 * BackendFramework
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { Permission } from "../models";
// @ts-ignore
import { UserRole } from "../models";
/**
 * UserRoleApi - axios parameter creator
 * @export
 */
export const UserRoleApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} projectId
     * @param {UserRole} userRole
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserRole: async (
      projectId: string,
      userRole: UserRole,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("createUserRole", "projectId", projectId);
      // verify required parameter 'userRole' is not null or undefined
      assertParamExists("createUserRole", "userRole", userRole);
      const localVarPath = `/v1/projects/{projectId}/userroles`.replace(
        `{${"projectId"}}`,
        encodeURIComponent(String(projectId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        userRole,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectUserRoles: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteProjectUserRoles", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/userroles`.replace(
        `{${"projectId"}}`,
        encodeURIComponent(String(projectId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserRole: async (
      projectId: string,
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteUserRole", "projectId", projectId);
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("deleteUserRole", "userId", userId);
      const localVarPath = `/v1/projects/{projectId}/userroles/{userId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectUserRoles: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getProjectUserRoles", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/userroles`.replace(
        `{${"projectId"}}`,
        encodeURIComponent(String(projectId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userRoleId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserRole: async (
      projectId: string,
      userRoleId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getUserRole", "projectId", projectId);
      // verify required parameter 'userRoleId' is not null or undefined
      assertParamExists("getUserRole", "userRoleId", userRoleId);
      const localVarPath = `/v1/projects/{projectId}/userroles/{userRoleId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"userRoleId"}}`, encodeURIComponent(String(userRoleId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userId
     * @param {Array<Permission>} permission
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserRolePermissions: async (
      projectId: string,
      userId: string,
      permission: Array<Permission>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("updateUserRolePermissions", "projectId", projectId);
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("updateUserRolePermissions", "userId", userId);
      // verify required parameter 'permission' is not null or undefined
      assertParamExists("updateUserRolePermissions", "permission", permission);
      const localVarPath = `/v1/projects/{projectId}/userroles/{userId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        permission,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserRoleApi - functional programming interface
 * @export
 */
export const UserRoleApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UserRoleApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {UserRole} userRole
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createUserRole(
      projectId: string,
      userRole: UserRole,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createUserRole(
        projectId,
        userRole,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteProjectUserRoles(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProjectUserRoles(
        projectId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteUserRole(
      projectId: string,
      userId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserRole(
        projectId,
        userId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectUserRoles(
      projectId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<UserRole>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectUserRoles(
        projectId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userRoleId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserRole(
      projectId: string,
      userRoleId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserRole>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getUserRole(
        projectId,
        userRoleId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userId
     * @param {Array<Permission>} permission
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateUserRolePermissions(
      projectId: string,
      userId: string,
      permission: Array<Permission>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserRolePermissions(
        projectId,
        userId,
        permission,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * UserRoleApi - factory interface
 * @export
 */
export const UserRoleApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UserRoleApiFp(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {UserRole} userRole
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserRole(
      projectId: string,
      userRole: UserRole,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .createUserRole(projectId, userRole, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectUserRoles(
      projectId: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .deleteProjectUserRoles(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserRole(
      projectId: string,
      userId: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .deleteUserRole(projectId, userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectUserRoles(
      projectId: string,
      options?: any
    ): AxiosPromise<Array<UserRole>> {
      return localVarFp
        .getProjectUserRoles(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userRoleId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserRole(
      projectId: string,
      userRoleId: string,
      options?: any
    ): AxiosPromise<UserRole> {
      return localVarFp
        .getUserRole(projectId, userRoleId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} userId
     * @param {Array<Permission>} permission
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserRolePermissions(
      projectId: string,
      userId: string,
      permission: Array<Permission>,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .updateUserRolePermissions(projectId, userId, permission, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createUserRole operation in UserRoleApi.
 * @export
 * @interface UserRoleApiCreateUserRoleRequest
 */
export interface UserRoleApiCreateUserRoleRequest {
  /**
   *
   * @type {string}
   * @memberof UserRoleApiCreateUserRole
   */
  readonly projectId: string;

  /**
   *
   * @type {UserRole}
   * @memberof UserRoleApiCreateUserRole
   */
  readonly userRole: UserRole;
}

/**
 * Request parameters for deleteProjectUserRoles operation in UserRoleApi.
 * @export
 * @interface UserRoleApiDeleteProjectUserRolesRequest
 */
export interface UserRoleApiDeleteProjectUserRolesRequest {
  /**
   *
   * @type {string}
   * @memberof UserRoleApiDeleteProjectUserRoles
   */
  readonly projectId: string;
}

/**
 * Request parameters for deleteUserRole operation in UserRoleApi.
 * @export
 * @interface UserRoleApiDeleteUserRoleRequest
 */
export interface UserRoleApiDeleteUserRoleRequest {
  /**
   *
   * @type {string}
   * @memberof UserRoleApiDeleteUserRole
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof UserRoleApiDeleteUserRole
   */
  readonly userId: string;
}

/**
 * Request parameters for getProjectUserRoles operation in UserRoleApi.
 * @export
 * @interface UserRoleApiGetProjectUserRolesRequest
 */
export interface UserRoleApiGetProjectUserRolesRequest {
  /**
   *
   * @type {string}
   * @memberof UserRoleApiGetProjectUserRoles
   */
  readonly projectId: string;
}

/**
 * Request parameters for getUserRole operation in UserRoleApi.
 * @export
 * @interface UserRoleApiGetUserRoleRequest
 */
export interface UserRoleApiGetUserRoleRequest {
  /**
   *
   * @type {string}
   * @memberof UserRoleApiGetUserRole
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof UserRoleApiGetUserRole
   */
  readonly userRoleId: string;
}

/**
 * Request parameters for updateUserRolePermissions operation in UserRoleApi.
 * @export
 * @interface UserRoleApiUpdateUserRolePermissionsRequest
 */
export interface UserRoleApiUpdateUserRolePermissionsRequest {
  /**
   *
   * @type {string}
   * @memberof UserRoleApiUpdateUserRolePermissions
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof UserRoleApiUpdateUserRolePermissions
   */
  readonly userId: string;

  /**
   *
   * @type {Array<Permission>}
   * @memberof UserRoleApiUpdateUserRolePermissions
   */
  readonly permission: Array<Permission>;
}

/**
 * UserRoleApi - object-oriented interface
 * @export
 * @class UserRoleApi
 * @extends {BaseAPI}
 */
export class UserRoleApi extends BaseAPI {
  /**
   *
   * @param {UserRoleApiCreateUserRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRoleApi
   */
  public createUserRole(
    requestParameters: UserRoleApiCreateUserRoleRequest,
    options?: any
  ) {
    return UserRoleApiFp(this.configuration)
      .createUserRole(
        requestParameters.projectId,
        requestParameters.userRole,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UserRoleApiDeleteProjectUserRolesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRoleApi
   */
  public deleteProjectUserRoles(
    requestParameters: UserRoleApiDeleteProjectUserRolesRequest,
    options?: any
  ) {
    return UserRoleApiFp(this.configuration)
      .deleteProjectUserRoles(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UserRoleApiDeleteUserRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRoleApi
   */
  public deleteUserRole(
    requestParameters: UserRoleApiDeleteUserRoleRequest,
    options?: any
  ) {
    return UserRoleApiFp(this.configuration)
      .deleteUserRole(
        requestParameters.projectId,
        requestParameters.userId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UserRoleApiGetProjectUserRolesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRoleApi
   */
  public getProjectUserRoles(
    requestParameters: UserRoleApiGetProjectUserRolesRequest,
    options?: any
  ) {
    return UserRoleApiFp(this.configuration)
      .getProjectUserRoles(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UserRoleApiGetUserRoleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRoleApi
   */
  public getUserRole(
    requestParameters: UserRoleApiGetUserRoleRequest,
    options?: any
  ) {
    return UserRoleApiFp(this.configuration)
      .getUserRole(
        requestParameters.projectId,
        requestParameters.userRoleId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {UserRoleApiUpdateUserRolePermissionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserRoleApi
   */
  public updateUserRolePermissions(
    requestParameters: UserRoleApiUpdateUserRolePermissionsRequest,
    options?: any
  ) {
    return UserRoleApiFp(this.configuration)
      .updateUserRolePermissions(
        requestParameters.projectId,
        requestParameters.userId,
        requestParameters.permission,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
