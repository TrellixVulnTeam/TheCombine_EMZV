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
/**
 * AudioApi - axios parameter creator
 * @export
 */
export const AudioApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAudioFile: async (
      projectId: string,
      wordId: string,
      fileName: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteAudioFile", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("deleteAudioFile", "wordId", wordId);
      // verify required parameter 'fileName' is not null or undefined
      assertParamExists("deleteAudioFile", "fileName", fileName);
      const localVarPath = `/v1/projects/{projectId}/words/{wordId}/audio/delete/{fileName}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)))
        .replace(`{${"fileName"}}`, encodeURIComponent(String(fileName)));
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
     * @param {string} wordId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadAudioFile: async (
      projectId: string,
      wordId: string,
      fileName: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("downloadAudioFile", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("downloadAudioFile", "wordId", wordId);
      // verify required parameter 'fileName' is not null or undefined
      assertParamExists("downloadAudioFile", "fileName", fileName);
      const localVarPath = `/v1/projects/{projectId}/words/{wordId}/audio/download/{fileName}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)))
        .replace(`{${"fileName"}}`, encodeURIComponent(String(fileName)));
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
     * @param {string} wordId
     * @param {any} file
     * @param {string} name
     * @param {string} filePath
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadAudioFile: async (
      projectId: string,
      wordId: string,
      file: any,
      name: string,
      filePath: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("uploadAudioFile", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("uploadAudioFile", "wordId", wordId);
      // verify required parameter 'file' is not null or undefined
      assertParamExists("uploadAudioFile", "file", file);
      // verify required parameter 'name' is not null or undefined
      assertParamExists("uploadAudioFile", "name", name);
      // verify required parameter 'filePath' is not null or undefined
      assertParamExists("uploadAudioFile", "filePath", filePath);
      const localVarPath = `/v1/projects/{projectId}/words/{wordId}/audio/upload`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)));
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
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      if (file !== undefined) {
        localVarFormParams.append("File", file as any);
      }

      if (name !== undefined) {
        localVarFormParams.append("Name", name as any);
      }

      if (filePath !== undefined) {
        localVarFormParams.append("FilePath", filePath as any);
      }

      localVarHeaderParameter["Content-Type"] = "multipart/form-data";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * AudioApi - functional programming interface
 * @export
 */
export const AudioApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AudioApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAudioFile(
      projectId: string,
      wordId: string,
      fileName: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAudioFile(
        projectId,
        wordId,
        fileName,
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
     * @param {string} wordId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async downloadAudioFile(
      projectId: string,
      wordId: string,
      fileName: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.downloadAudioFile(
        projectId,
        wordId,
        fileName,
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
     * @param {string} wordId
     * @param {any} file
     * @param {string} name
     * @param {string} filePath
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadAudioFile(
      projectId: string,
      wordId: string,
      file: any,
      name: string,
      filePath: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAudioFile(
        projectId,
        wordId,
        file,
        name,
        filePath,
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
 * AudioApi - factory interface
 * @export
 */
export const AudioApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AudioApiFp(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAudioFile(
      projectId: string,
      wordId: string,
      fileName: string,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .deleteAudioFile(projectId, wordId, fileName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadAudioFile(
      projectId: string,
      wordId: string,
      fileName: string,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .downloadAudioFile(projectId, wordId, fileName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {any} file
     * @param {string} name
     * @param {string} filePath
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadAudioFile(
      projectId: string,
      wordId: string,
      file: any,
      name: string,
      filePath: string,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .uploadAudioFile(projectId, wordId, file, name, filePath, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for deleteAudioFile operation in AudioApi.
 * @export
 * @interface AudioApiDeleteAudioFileRequest
 */
export interface AudioApiDeleteAudioFileRequest {
  /**
   *
   * @type {string}
   * @memberof AudioApiDeleteAudioFile
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof AudioApiDeleteAudioFile
   */
  readonly wordId: string;

  /**
   *
   * @type {string}
   * @memberof AudioApiDeleteAudioFile
   */
  readonly fileName: string;
}

/**
 * Request parameters for downloadAudioFile operation in AudioApi.
 * @export
 * @interface AudioApiDownloadAudioFileRequest
 */
export interface AudioApiDownloadAudioFileRequest {
  /**
   *
   * @type {string}
   * @memberof AudioApiDownloadAudioFile
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof AudioApiDownloadAudioFile
   */
  readonly wordId: string;

  /**
   *
   * @type {string}
   * @memberof AudioApiDownloadAudioFile
   */
  readonly fileName: string;
}

/**
 * Request parameters for uploadAudioFile operation in AudioApi.
 * @export
 * @interface AudioApiUploadAudioFileRequest
 */
export interface AudioApiUploadAudioFileRequest {
  /**
   *
   * @type {string}
   * @memberof AudioApiUploadAudioFile
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof AudioApiUploadAudioFile
   */
  readonly wordId: string;

  /**
   *
   * @type {any}
   * @memberof AudioApiUploadAudioFile
   */
  readonly file: any;

  /**
   *
   * @type {string}
   * @memberof AudioApiUploadAudioFile
   */
  readonly name: string;

  /**
   *
   * @type {string}
   * @memberof AudioApiUploadAudioFile
   */
  readonly filePath: string;
}

/**
 * AudioApi - object-oriented interface
 * @export
 * @class AudioApi
 * @extends {BaseAPI}
 */
export class AudioApi extends BaseAPI {
  /**
   *
   * @param {AudioApiDeleteAudioFileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public deleteAudioFile(
    requestParameters: AudioApiDeleteAudioFileRequest,
    options?: any
  ) {
    return AudioApiFp(this.configuration)
      .deleteAudioFile(
        requestParameters.projectId,
        requestParameters.wordId,
        requestParameters.fileName,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {AudioApiDownloadAudioFileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public downloadAudioFile(
    requestParameters: AudioApiDownloadAudioFileRequest,
    options?: any
  ) {
    return AudioApiFp(this.configuration)
      .downloadAudioFile(
        requestParameters.projectId,
        requestParameters.wordId,
        requestParameters.fileName,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {AudioApiUploadAudioFileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public uploadAudioFile(
    requestParameters: AudioApiUploadAudioFileRequest,
    options?: any
  ) {
    return AudioApiFp(this.configuration)
      .uploadAudioFile(
        requestParameters.projectId,
        requestParameters.wordId,
        requestParameters.file,
        requestParameters.name,
        requestParameters.filePath,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
