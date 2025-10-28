import { bh as httpRequest } from "./index.CjDU5CMT.js";
const LOG_BASE_URL = "/api/v1/logs";
const LogAPI = {
  /** 获取日志分页列表 */
  getPage(queryParams) {
    return httpRequest({
      url: `${LOG_BASE_URL}/page`,
      method: "get",
      params: queryParams
    });
  },
  /** 获取访问趋势 */
  getVisitTrend(queryParams) {
    return httpRequest({
      url: `${LOG_BASE_URL}/visit-trend`,
      method: "get",
      params: queryParams
    });
  },
  /** 获取访问统计 */
  getVisitStats() {
    return httpRequest({ url: `${LOG_BASE_URL}/visit-stats`, method: "get" });
  }
};
export {
  LogAPI as L
};
