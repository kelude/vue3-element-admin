import { bh as httpRequest } from "./index.C-w1mPR5.js";
const DEPT_BASE_URL = "/api/v1/dept";
const DeptAPI = {
  /** 获取部门树形列表 */
  getList(queryParams) {
    return httpRequest({ url: `${DEPT_BASE_URL}`, method: "get", params: queryParams });
  },
  /** 获取部门下拉数据源 */
  getOptions() {
    return httpRequest({ url: `${DEPT_BASE_URL}/options`, method: "get" });
  },
  /** 获取部门表单数据 */
  getFormData(id) {
    return httpRequest({ url: `${DEPT_BASE_URL}/${id}/form`, method: "get" });
  },
  /** 新增部门 */
  create(data) {
    return httpRequest({ url: `${DEPT_BASE_URL}`, method: "post", data });
  },
  /** 修改部门 */
  update(id, data) {
    return httpRequest({ url: `${DEPT_BASE_URL}/${id}`, method: "put", data });
  },
  /** 批量删除部门，多个以英文逗号(,)分割 */
  deleteByIds(ids) {
    return httpRequest({ url: `${DEPT_BASE_URL}/${ids}`, method: "delete" });
  }
};
export {
  DeptAPI as D
};
