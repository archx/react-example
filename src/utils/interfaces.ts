export interface ApiResponse<T = any> {
    /**
     * 状态码
     * 
     * @type { number }
     */
    code: number;

    /**
     * 消息
     * 
     * @type { strng }
     */
    message: string;

    /**
     * 数据；可选
     * 
     * @type { T }
     */
    data?: T
}