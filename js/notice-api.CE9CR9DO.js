import { bh as httpRequest } from "./index.By1HG0zl.js";
const NOTICE_BASE_URL = "/api/v1/notices";
const NoticeAPI = {
  /** 获取通知公告分页数据 */
  getPage(queryParams) {
    return httpRequest({
      url: `${NOTICE_BASE_URL}/page`,
      method: "get",
      params: queryParams
    });
  },
  /** 获取通知公告表单数据 */
  getFormData(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/form`, method: "get" });
  },
  /** 添加通知公告 */
  create(data) {
    return httpRequest({ url: `${NOTICE_BASE_URL}`, method: "post", data });
  },
  /** 更新通知公告 */
  update(id, data) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}`, method: "put", data });
  },
  /** 批量删除通知公告，多个以英文逗号(,)分割 */
  deleteByIds(ids) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${ids}`, method: "delete" });
  },
  /** 发布通知 */
  publish(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/publish`, method: "put" });
  },
  /** 撤回通知 */
  revoke(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/revoke`, method: "put" });
  },
  /** 查看通知 */
  getDetail(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/detail`, method: "get" });
  },
  /** 全部已读 */
  readAll() {
    return httpRequest({ url: `${NOTICE_BASE_URL}/read-all`, method: "put" });
  },
  /** 获取我的通知分页列表 */
  getMyNoticePage(queryParams) {
    return httpRequest({
      url: `${NOTICE_BASE_URL}/my-page`,
      method: "get",
      params: queryParams
    });
  }
};
export {
  NoticeAPI as N
};
