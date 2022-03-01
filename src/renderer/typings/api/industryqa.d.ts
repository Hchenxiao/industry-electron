declare namespace Model.Industryqa {
    export interface CameraItemDeviceInfo {
        factory?: string;
        model?: string;
    }
    export interface CodeListRespCodeList {
        id?: number; // int32
        code_id?: string;
        code_name?: string;
        code_belong?: number; // int32
        code_content?: string;
    }
    export interface GetBusinessListRespDataList {
        id?: number; // int32
        name?: string;
        enabled?: number; // int32
        business_key?: string;
        yamlconfig?: string;
    }
    export interface GetCameraListReplyCameraItem {
        id?: number; // int32
        name?: string;
        ip?: string;
        port?: number; // int32
        serial?: string;
        camera_id?: string;
        device_class?: string;
        creator?: number; // int32
        type?: number; // int32
        vendor?: string;
        device_info?: CameraItemDeviceInfo;
        store_flag?: number; // int32
        online_status?: number; // int32
        online_status_updated_at?: string;
        created_at?: string;
        updated_at?: string;
        deleted_at?: string;
        light_source?: number; // int32
    }
    export interface GetNetListReplyGetNetList {
        /**
         * 是否自动获取
         */
        boot_proto?: string;
        /**
         * 网口
         */
        name?: string;
        /**
         * ip地址
         */
        ip_address?: string;
        /**
         * 子网掩码
         */
        netmask?: string;
        /**
         * 网关
         */
        gateway?: string;
        /**
         * mac地址
         */
        mac_address?: string;
        /**
         * 默认网关
         */
        default_net?: boolean; // boolean
    }
    export interface GetPlcListReplyGetPlcList {
        id?: number; // int32
        name?: string;
        protocol?: number; // int32
        addr?: string;
        port?: number; // int32
        serial?: string;
        device_info?: string;
        slave_id?: number; // int32
        enabled?: number; // int32
        device_key?: string;
        online_status?: number; // int32
        creator?: number; // int32
        online_status_updated_at?: string;
        created_at?: string;
        updated_at?: string;
        deleted_at?: string;
    }
    /**
     * app列表
     */
    export interface MisBackendAppItem {
        id?: string; // uint64
        name?: string;
        key?: string;
        status?: number; // int32
        created_at?: string;
        desc?: string;
        app_file_name?: string;
    }
    /**
     * ==============业务流程增删改条件
     */
    export interface MisBackendBusinessReq {
        /**
         * operation = "ADD" ,"DEL","UPDATE"
         */
        operation?: string;
        /**
         * 业务流程id
         */
        id?: number; // int32
        /**
         * 业务流程名称
         */
        name?: string;
        /**
         * 业务流程内容
         */
        yaml_config?: string;
        /**
         * 业务流程key
         */
        business_key?: string;
        /**
         * 传作者
         */
        creator?: number; // int32
        operationType?: MisBackendBusinessReqOperationType;
    }
    /**
     * - ADD: 增加：{ "operation":"ADD", "id":221,"name": "测试业务222","enabled": 1,"yaml_config": "xxxxxx111","creator":1,"business_key":"123"}
     *  - DEL: 删除：id
     *  - UPDATE: 更新{ "operation":"UPDATE", "id":221,"name": "测试业务222","enabled": 1,"yaml_config": "xxxxxx111","creator":1,"business_key":"123"}
     */
    export type MisBackendBusinessReqOperationType = 'ADD' | 'DEL' | 'UPDATE';
    export interface MisBackendCaptureResp {
        code?: number; // int32
        msg?: string;
        /**
         * 照片信息
         */
        data?: MisBackendImage;
    }
    /**
     * ============代码
     */
    export interface MisBackendCodeListResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendCodeListRespData;
    }
    export interface MisBackendCodeListRespData {
        total?: number; // int32
        list?: CodeListRespCodeList[];
    }
    export interface MisBackendCommonResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendCommonRespData[];
    }
    export interface MisBackendCommonRespData {
        name?: string;
        value?: string;
    }
    export interface MisBackendConnectCameraListResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendConnectCameraListRespData[];
    }
    export interface MisBackendConnectCameraListRespData {
        serial?: string;
    }
    export interface MisBackendEditNetReq {
        /**
         * 网关名称：网口
         */
        name?: string;
        /**
         * 获取方式：static 自动， DHCP：手动
         */
        boot_proto?: string;
        /**
         * ip地址
         */
        ip_address?: string;
        /**
         * 子网严吗
         */
        netmask?: string;
        /**
         * 网关
         */
        gateway?: string;
    }
    export interface MisBackendEnabledBusinessListResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendEnabledBusinessListRespData[];
    }
    export interface MisBackendEnabledBusinessListRespData {
        /**
         * 流程ID
         */
        business_id?: number; // int64
        /**
         * 配置名称
         */
        name?: string;
    }
    export interface MisBackendExecuteReq {
        /**
         * 编码
         */
        key?: string;
        /**
         * 执行参数
         */
        param?: string;
    }
    export interface MisBackendExecuteResp {
        code?: number; // int32
        msg?: string;
        /**
         * 返回值
         */
        data?: string;
    }
    /**
     * ========获取app列表
     */
    export interface MisBackendGetAppListResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetAppListRespData;
    }
    export interface MisBackendGetAppListRespData {
        total?: number; // int64
        list?: MisBackendAppItem[];
    }
    /**
     * ============
     */
    export interface MisBackendGetBusinessListResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetBusinessListRespData;
    }
    export interface MisBackendGetBusinessListRespData {
        total?: number; // int32
        list?: GetBusinessListRespDataList[];
    }
    export interface MisBackendGetBusinessResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetBusinessRespData;
    }
    export interface MisBackendGetBusinessRespData {
        id?: number; // int32
        name?: string;
        yamlconfig?: string;
        code_id?: string;
    }
    export interface MisBackendGetCameraListReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetCameraListReplyData;
    }
    export interface MisBackendGetCameraListReplyData {
        total?: number; // int64
        list?: GetCameraListReplyCameraItem[];
        /**
         * 能添加的最大值
         */
        maximum?: number; // int64
    }
    export interface MisBackendGetCodeResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetCodeRespData;
    }
    export interface MisBackendGetCodeRespData {
        /**
         * 代码模块ID
         */
        code_id?: string;
        /**
         * 代码文件
         */
        code_content?: string;
        /**
         * 代码模块名称
         */
        name?: string;
    }
    export interface MisBackendGetDeaultNetResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetDeaultNetRespData;
    }
    export interface MisBackendGetDeaultNetRespData {
        name?: string;
        boot_proto?: string;
    }
    export interface MisBackendGetDnsReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetDnsReplyData;
    }
    export interface MisBackendGetDnsReplyData {
        primary?: string;
        secondary?: string;
    }
    export interface MisBackendGetGeneralSettingsReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetGeneralSettingsReplyData;
    }
    export interface MisBackendGetGeneralSettingsReplyData {
        time?: string;
        timezone?: string;
        disable?: boolean; // boolean
        host?: string;
        port?: number; // int32
        sync_interval?: number; // int32
    }
    export interface MisBackendGetNetListReply {
        code?: number; // int32
        msg?: string;
        data?: GetNetListReplyGetNetList[];
    }
    export interface MisBackendGetPlcListReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetPlcListReplyData;
    }
    export interface MisBackendGetPlcListReplyData {
        total?: number; // int32
        list?: GetPlcListReplyGetPlcList[];
        /**
         * 能添加的最大值
         */
        maximum?: number; // int64
    }
    export interface MisBackendGetStorageListReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetStorageListReplyData;
    }
    export interface MisBackendGetStorageListReplyData {
        total?: number; // int32
        list?: MisBackendGetStorageListReplyList[];
    }
    export interface MisBackendGetStorageListReplyList {
        /**
         * app id
         */
        id?: number; // int32
        /**
         * app名称
         */
        app_name?: string;
        /**
         * 是否存储数据 1 存储 2 不存储
         */
        is_storage?: number; // int32
        /**
         * 存储位置：bucket
         */
        storage_path?: string;
        /**
         * 存储类型：1 本地存储 2 云存储
         */
        storage_type?: number; // int32
        endpoint?: string;
        access_key_id?: string;
        secret_access_key?: string;
        use_ssl?: number; // int32
    }
    export interface MisBackendGetStorageReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetStorageReplyData;
    }
    export interface MisBackendGetStorageReplyData {
        storage_id?: number; // int32
        storage_disk_campacity?: number; // float
        storage_surplus?: number; // float
        storage_method?: string;
    }
    export interface MisBackendGetUserReply {
        code?: number; // int32
        msg?: string;
        data?: MisBackendGetUserReplyData;
    }
    export interface MisBackendGetUserReplyData {
        id?: number; // int32
        user?: string;
        Password?: string;
        createdAt?: string;
        cookie?: string;
    }
    export interface MisBackendGetUserReq {
        user?: string;
        password?: string;
    }
    export interface MisBackendImage {
        /**
         * 照片长度
         */
        width?: string; // int64
        /**
         * 照片宽度
         */
        height?: string; // int64
        /**
         * 照片base64
         */
        img?: string;
    }
    /**
     * 取推理结果
     */
    export interface MisBackendInferReq {
        app_key?: string;
        /**
         * 照片base64
         */
        img?: string;
    }
    export interface MisBackendInferResp {
        code?: number; // int32
        msg?: string;
        data?: string;
    }
    /**
     * ========新增app
     */
    export interface MisBackendOperationAppReq {
        /**
         * 操作方法：START,ADD,DEL,STOP,UPDATE
         */
        operation?: string;
        id?: number; // int32
        /**
         * APP 的name
         */
        app_name?: string;
        /**
         * app 的key
         */
        app_key?: string;
        /**
         * app 的路径
         */
        app_path?: string;
        /**
         * 创作者
         */
        creator?: number; // int32
        operationType?: MisBackendOperationAppReqOperationType;
    }
    /**
     * - START: { "operation":"START","app_key":"app123"}
     *  - ADD: {"operation":"ADD","app_name":"app名称","app_key":"app的key","app_path":"app的存储路径","creator":"用户ID"}
     *  - DEL: { "operation":"DEL","app_key":"app123"}
     *  - STOP: { "operation":"STOP","app_key":"app123"}
     *  - UPDATE: { "operation":"UPDATE","app_key":"app123", "app_name":"app名称"}
     */
    export type MisBackendOperationAppReqOperationType = 'START' | 'ADD' | 'DEL' | 'STOP' | 'UPDATE';
    export interface MisBackendOperationCameraReq {
        /**
         * 操作ADD，DEL，UPDATE;ADD:
         */
        operation?: string;
        /**
         * 数据库ID
         */
        id?: number; // int32
        /**
         * 相机ID
         */
        camera_id?: string;
        /**
         * 相机名称
         */
        name?: string;
        /**
         * 相机ip
         */
        ip?: string;
        /**
         * 相机序列号
         */
        serial?: string;
        /**
         * 相机类型：daheng_usb，daheng_ip
         */
        device_class?: string;
        /**
         * 相机信息：1:线阵（网络）  2：面阵（usb）
         */
        device_info?: string;
        /**
         * 相机端口
         */
        port?: number; // int32
        /**
         * 相机类型
         */
        type?: number; // int32
        /**
         * 用户id
         */
        creator?: number; // int32
        operationType?: MisBackendOperationType;
        light_source?: number; // int32
    }
    /**
     * ============代码管理增删改
     */
    export interface MisBackendOperationCodeReq {
        /**
         * 操作：ADD ,DEL,UPDATE
         */
        operation?: string;
        /**
         * 用户
         */
        creator?: number; // int32
        /**
         * code的Id
         */
        code_id?: string;
        /**
         * code 的名称
         */
        code_name?: string;
        /**
         * code 的内容
         */
        code_content?: string;
        operationType?: MisBackendOperationCodeReqOperationType;
    }
    /**
     * - ADD: 增加 {"operation":"ADD",""code_id":"xxx"....}
     *  - DEL: 删除 {"operation":"DEL","code_id";"xxxxx"}
     *  - UPDATE: 更新  {"operation":"UPDATE","code_id":"xxxx"}
     */
    export type MisBackendOperationCodeReqOperationType = 'ADD' | 'DEL' | 'UPDATE';
    export interface MisBackendOperationPlcReq {
        /**
         * plc ：ADD,DEL,UPDATE
         */
        operation?: string;
        id?: number; // int32
        /**
         * plc 名称
         */
        name?: string;
        /**
         * plc 协议 1 modbus tcp 2 modbus rtu 3  modbus ASCI  4 opc ua
         */
        protocol?: number; // int32
        /**
         * plc ip
         */
        addr?: string;
        /**
         * plc 端口
         */
        port?: number; // int32
        /**
         * plc 序列号
         */
        serial?: string;
        /**
         * plc 设备信息
         */
        device_info?: string;
        /**
         * slave_id //不能重复
         */
        slave_id?: number; // int32
        creator?: number; // int32
        /**
         * 设备标识，唯一
         */
        device_key?: string;
        operationType?: MisBackendOperationPlcReqOperationType;
    }
    /**
     * - ADD: 新增{"operation":"ADD","name":"plc name","protocol":1","addr":"127.0.0.1","port":"8080","serial":"xxxxx","slave_id":"1","creator":1,"device_key":"aab2d6d0-20d6-46fe-a64b-034013196637"}
     *  - DEL: 删除{"operation":"DEL","id":1}
     *  - UPDATE: 更新 {"operation":"UPDATE","name":"plc name","protocol":1","addr":"127.0.0.1","port":"8080","serial":"xxxxx","slave_id":"1"，"device_key":"aab2d6d0-20d6-46fe-a64b-034013196637"}
     */
    export type MisBackendOperationPlcReqOperationType = 'ADD' | 'DEL' | 'UPDATE';
    /**
     * - ADD: 新增 {"operation":"ADD","camera_id":"相机id".....}
     *  - DEL: 删除 {"operation":"DEL","camera_id":"相机Id"}
     *  - UPDATE: 更新 {"operation":"UPDATE","camera_id":"相机id"...}//creator 不必传
     */
    export type MisBackendOperationType = 'ADD' | 'DEL' | 'UPDATE';
    export interface MisBackendPreviewConfigDetailResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendPreviewConfigDetailRespData;
    }
    export interface MisBackendPreviewConfigDetailRespData {
        /**
         * 流程ID
         */
        business_id?: number; // int64
        /**
         * 展示数据
         */
        preview_type?: MisBackendPreviewType;
    }
    export interface MisBackendPreviewDetail {
        /**
         * 相机名称
         */
        name?: string;
        /**
         * 照片base64
         */
        img?: string;
        /**
         * 推理结果
         */
        infer_result?: string;
        /**
         * 是否通过推理 true 通过 false 不通过
         */
        infer_pass_flag?: boolean; // boolean
    }
    export interface MisBackendPreviewResp {
        code?: number; // int32
        msg?: string;
        data?: MisBackendPreviewRespData;
    }
    export interface MisBackendPreviewRespData {
        /**
         * 触发时间
         */
        tick?: string; // uint64
        /**
         * 详情
         */
        detail?: MisBackendPreviewDetail[];
    }
    /**
     * - PREVIEW_TYPE_NONE: 未知
     *  - PREVIEW_TYPE_ALL: 全部
     *  - PREVIEW_TYPE_NG: 仅展示缺陷产品
     */
    export type MisBackendPreviewType = 'PREVIEW_TYPE_NONE' | 'PREVIEW_TYPE_ALL' | 'PREVIEW_TYPE_NG';
    export interface MisBackendReq {
        data?: string;
    }
    export interface MisBackendRsp {
        msg?: string;
    }
    export interface MisBackendSaveDnsReq {
        /**
         * 第一个dns
         */
        primary?: string;
        /**
         * 第二个dns
         */
        secondary?: string;
    }
    export interface MisBackendSaveGeneralSettingsReq {
        /**
         * 时间
         */
        time?: string;
        /**
         * 时区
         */
        timezone?: string;
        /**
         * 是否停用
         */
        disable?: boolean; // boolean
        /**
         * 服务
         */
        host?: string;
        /**
         * 端口
         */
        port?: number; // int32
        /**
         * 更新周期
         */
        sync_interval?: number; // int32
    }
    export interface MisBackendSetNetPortReq {
        /**
         * 默认网关名称
         */
        name?: string;
    }
    export interface MisBackendUpdatePreviewConfigReq {
        /**
         * 流程ID
         */
        business_id?: number; // int64
        /**
         * 展示数据
         */
        preview_type?: MisBackendPreviewType;
    }
    export interface MisBackendUpdatePreviewConfigResp {
        code?: number; // int32
        msg?: string;
    }
    export interface MisBackendUpdateStorageReq {
        /**
         * app id
         */
        id?: number; // int32
        endpoint?: string;
        access_key_id?: string;
        secret_access_key?: string;
        use_ssl?: number; // int32
        /**
         * 存储类型：1 本地存储 2 云存储
         */
        storage_type?: number; // int32
        /**
         * 存储路径(bucket等)
         */
        storage_path?: string;
    }
    export interface MisBackendWipeDataReq {
        /**
         * 删除数据密码
         */
        password?: string;
    }
    export interface ProtobufAny {
        type_url?: string;
        value?: string; // byte
    }
    export interface RuntimeError {
        error?: string;
        code?: number; // int32
        message?: string;
        details?: ProtobufAny[];
    }
}
