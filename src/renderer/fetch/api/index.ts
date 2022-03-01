/* This file was auto-generated. Don't modify this manually. */

export namespace API {
  // Industryqa
  export enum Industryqa {
    /**
     * undefined
     *
     * @param {Model.Industryqa.Mis_backendReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendRsp} Model.Industryqa.Mis_backendRsp
     * @summary POST /ping
     */
    MisBackendService_ping = 'Industryqa:MisBackendService_ping',

    /**
     * 已启用业务配置列表
     *
     * @return {Model.Industryqa.Mis_backendEnabledBusinessListResp} Model.Industryqa.Mis_backendEnabledBusinessListResp
     * @summary GET /v1/business/enabled
     */
    MisBackendService_EnabledBusinessList = 'Industryqa:MisBackendService_EnabledBusinessList',

    /**
     * 获取业务流程
     *
     * @param {integer} id - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetBusinessResp} Model.Industryqa.Mis_backendGetBusinessResp
     * @summary GET /v1/business/get_business
     */
    MisBackendService_GetBusiness = 'Industryqa:MisBackendService_GetBusiness',

    /**
     * 获取业务流程管理列表
     *
     * @param {integer} page - [query] undefined
     * @param {integer} limit - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetBusinessListResp} Model.Industryqa.Mis_backendGetBusinessListResp
     * @summary GET /v1/business/get_business_list
     */
    MisBackendService_GetBusinessList = 'Industryqa:MisBackendService_GetBusinessList',

    /**
     * 是否启动业务流程
     *
     * @param {integer} id - [query] 业务流程id.
     * @param {integer} flow_enabled - [query] 是否启用.
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary GET /v1/business/is_start_flow
     */
    MisBackendService_IsStartFlow = 'Industryqa:MisBackendService_IsStartFlow',

    /**
     * 增删改业务流程
     *
     * @param {Model.Industryqa.Mis_backendBusinessReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/business/operation_business
     */
    MisBackendService_OperationBusiness = 'Industryqa:MisBackendService_OperationBusiness',

    /**
     * 预览
     *
     * @return {Model.Industryqa.Mis_backendPreviewResp} Model.Industryqa.Mis_backendPreviewResp
     * @summary GET /v1/business/preview
     */
    MisBackendService_Preview = 'Industryqa:MisBackendService_Preview',

    /**
     * 预览设置详情
     *
     * @return {Model.Industryqa.Mis_backendPreviewConfigDetailResp} Model.Industryqa.Mis_backendPreviewConfigDetailResp
     * @summary GET /v1/business/preview_config
     */
    MisBackendService_PreviewConfigDetail = 'Industryqa:MisBackendService_PreviewConfigDetail',

    /**
     * 预览设置
     *
     * @param {Model.Industryqa.Mis_backendUpdatePreviewConfigReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendUpdatePreviewConfigResp} Model.Industryqa.Mis_backendUpdatePreviewConfigResp
     * @summary POST /v1/business/preview_config
     */
    MisBackendService_UpdatePreviewConfigDetail = 'Industryqa:MisBackendService_UpdatePreviewConfigDetail',

    /**
     * 图像采集
     *
     * @param {string} camera_id - [query] 照片ID.
     * @param {string} frames - [query] 扫描针数.
     * @return {Model.Industryqa.Mis_backendCaptureResp} Model.Industryqa.Mis_backendCaptureResp
     * @summary GET /v1/camera/capture
     */
    MisBackendService_Capture = 'Industryqa:MisBackendService_Capture',

    /**
     * 获取连接相机的序列号
     *
     * @return {Model.Industryqa.Mis_backendConnectCameraListResp} Model.Industryqa.Mis_backendConnectCameraListResp
     * @summary GET /v1/camera/connect_camera_list
     */
    MisBackendService_ConnectCameraList = 'Industryqa:MisBackendService_ConnectCameraList',

    /**
     * 获取相机列表
     *
     * @param {integer} page - [query] undefined
     * @param {integer} limit - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetCameraListReply} Model.Industryqa.Mis_backendGetCameraListReply
     * @summary GET /v1/camera/get_camera_list
     */
    MisBackendService_GetCameraList = 'Industryqa:MisBackendService_GetCameraList',

    /**
     * 相机增，删，改
     *
     * @param {Model.Industryqa.Mis_backendOperationCameraReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/camera/operation_camera
     */
    MisBackendService_OperationCamera = 'Industryqa:MisBackendService_OperationCamera',

    /**
     * 运行代码
     *
     * @param {Model.Industryqa.Mis_backendExecuteReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendExecuteResp} Model.Industryqa.Mis_backendExecuteResp
     * @summary POST /v1/code/execute
     */
    MisBackendService_ExecuteCode = 'Industryqa:MisBackendService_ExecuteCode',

    /**
     * 获取代码详情
     *
     * @param {string} code_id - [query] 代码模块ID.
     * @return {Model.Industryqa.Mis_backendGetCodeResp} Model.Industryqa.Mis_backendGetCodeResp
     * @summary GET /v1/code/get_code
     */
    MisBackendService_GetCode = 'Industryqa:MisBackendService_GetCode',

    /**
     * 获取代码管理列表
     *
     * @param {integer} code_type - [query] 1用户， 2系统.
     * @param {integer} page - [query] undefined
     * @param {integer} limit - [query] undefined
     * @return {Model.Industryqa.Mis_backendCodeListResp} Model.Industryqa.Mis_backendCodeListResp
     * @summary GET /v1/code/get_code_list
     */
    MisBackendService_GetCodeList = 'Industryqa:MisBackendService_GetCodeList',

    /**
     * 代码管理增删改
     *
     * @param {Model.Industryqa.Mis_backendOperationCodeReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/code/operation_code
     */
    MisBackendService_OperationCode = 'Industryqa:MisBackendService_OperationCode',

    /**
     * 获取dns
     *
     * @return {Model.Industryqa.Mis_backendGetDnsReply} Model.Industryqa.Mis_backendGetDnsReply
     * @summary GET /v1/dns/get_dns
     */
    MisBackendService_GetDns = 'Industryqa:MisBackendService_GetDns',

    /**
     * 保存dns
     *
     * @param {Model.Industryqa.Mis_backendSaveDnsReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/dns/save_dns
     */
    MisBackendService_SaveDns = 'Industryqa:MisBackendService_SaveDns',

    /**
     * 获取app列表
     *
     * @param {integer} status - [query] undefined
     * @param {integer} page - [query] undefined
     * @param {integer} limit - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetAppListResp} Model.Industryqa.Mis_backendGetAppListResp
     * @summary GET /v1/inference/get_app_list
     */
    MisBackendService_GetApplist = 'Industryqa:MisBackendService_GetApplist',

    /**
     * 取推理结果
     *
     * @param {Model.Industryqa.Mis_backendInferReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendInferResp} Model.Industryqa.Mis_backendInferResp
     * @summary POST /v1/inference/get_infer
     */
    MisBackendService_GetInfer = 'Industryqa:MisBackendService_GetInfer',

    /**
     * 启动，停止，删除app
     *
     * @param {Model.Industryqa.Mis_backendOperationAppReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/inference/operation_app
     */
    MisBackendService_OperationApp = 'Industryqa:MisBackendService_OperationApp',

    /**
     * 编辑网关
     *
     * @param {Model.Industryqa.Mis_backendEditNetReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/net/edit_net
     */
    MisBackendService_EditNet = 'Industryqa:MisBackendService_EditNet',

    /**
     * 获取默认网关
     *
     * @return {Model.Industryqa.Mis_backendGetDeaultNetResp} Model.Industryqa.Mis_backendGetDeaultNetResp
     * @summary GET /v1/net/get_default_net
     */
    MisBackendService_GetDefaultNet = 'Industryqa:MisBackendService_GetDefaultNet',

    /**
     * 获取常规设置
     *
     * @param {string} type - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetGeneralSettingsReply} Model.Industryqa.Mis_backendGetGeneralSettingsReply
     * @summary GET /v1/net/get_general_settings
     */
    MisBackendService_GetGeneralSettings = 'Industryqa:MisBackendService_GetGeneralSettings',

    /**
     * 获取网关列表
     *
     * @return {Model.Industryqa.Mis_backendGetNetListReply} Model.Industryqa.Mis_backendGetNetListReply
     * @summary GET /v1/net/get_net_list
     */
    MisBackendService_GetNetList = 'Industryqa:MisBackendService_GetNetList',

    /**
     * 保存常规设置
     *
     * @param {Model.Industryqa.Mis_backendSaveGeneralSettingsReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/net/save_general_settings
     */
    MisBackendService_SaveGeneralSettings = 'Industryqa:MisBackendService_SaveGeneralSettings',

    /**
     * 设置默认网关
     *
     * @param {Model.Industryqa.Mis_backendSetNetPortReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/net/set_default_net
     */
    MisBackendService_SetNetPort = 'Industryqa:MisBackendService_SetNetPort',

    /**
     * 获取plc 列表
     *
     * @param {integer} page - [query] undefined
     * @param {integer} limit - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetPlcListReply} Model.Industryqa.Mis_backendGetPlcListReply
     * @summary GET /v1/plc/get_plc_list
     */
    MisBackendService_GetPlcList = 'Industryqa:MisBackendService_GetPlcList',

    /**
     * 删除,新增,编辑plc
     *
     * @param {Model.Industryqa.Mis_backendOperationPlcReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/plc/operation_plc
     */
    MisBackendService_OperationPlc = 'Industryqa:MisBackendService_OperationPlc',

    /**
     * 获取存储策略
     *
     * @return {Model.Industryqa.Mis_backendGetStorageReply} Model.Industryqa.Mis_backendGetStorageReply
     * @summary GET /v1/storage/get_storage
     */
    MisBackendService_GetStorage = 'Industryqa:MisBackendService_GetStorage',

    /**
     * 获取存储控制列表
     *
     * @param {integer} page - [query] undefined
     * @param {integer} limit - [query] undefined
     * @return {Model.Industryqa.Mis_backendGetStorageListReply} Model.Industryqa.Mis_backendGetStorageListReply
     * @summary GET /v1/storage/get_storage_list
     */
    MisBackendService_GetStorageList = 'Industryqa:MisBackendService_GetStorageList',

    /**
     * 是否保存数据
     *
     * @param {integer} id - [query] app id.
     * @param {integer} mode - [query] app 是否存储数据 1:是 2:否.
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary GET /v1/storage/is_storage_data
     */
    MisBackendService_IsStorageData = 'Industryqa:MisBackendService_IsStorageData',

    /**
     * 修改存储配置
     *
     * @param {Model.Industryqa.Mis_backendUpdateStorageReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/storage/update_storage
     */
    MisBackendService_UpdateStorage = 'Industryqa:MisBackendService_UpdateStorage',

    /**
     * 删除数据
     *
     * @param {Model.Industryqa.Mis_backendWipeDataReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary POST /v1/storager/wipe_data
     */
    MisBackendService_WipeData = 'Industryqa:MisBackendService_WipeData',

    /**
     * 登录
     *
     * @param {Model.Industryqa.Mis_backendGetUserReq} body - [body] undefined (required)
     * @return {Model.Industryqa.Mis_backendGetUserReply} Model.Industryqa.Mis_backendGetUserReply
     * @summary POST /v1/user/login
     */
    MisBackendService_GetUser = 'Industryqa:MisBackendService_GetUser',

    /**
     * 退出登录
     *
     * @return {Model.Industryqa.Mis_backendCommonResp} Model.Industryqa.Mis_backendCommonResp
     * @summary GET /v1/user/logout
     */
    MisBackendService_Logout = 'Industryqa:MisBackendService_Logout',
  }
}
