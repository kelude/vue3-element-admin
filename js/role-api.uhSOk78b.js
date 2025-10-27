import { bh as httpRequest } from "./index.C-w1mPR5.js";
const ROLE_BASE_URL = "/api/v1/roles";
const RoleAPI = {
  /** 获取角色分页数据 */
  getPage(queryParams) {
    return httpRequest({
      url: `${ROLE_BASE_URL}/page`,
      method: "get",
      params: queryParams
    });
  },
  /** 获取角色下拉数据源 */
  getOptions() {
    return httpRequest({ url: `${ROLE_BASE_URL}/options`, method: "get" });
  },
  /** 获取角色的菜单ID集合 */
  getRoleMenuIds(roleId) {
    return httpRequest({ url: `${ROLE_BASE_URL}/${roleId}/menuIds`, method: "get" });
  },
  /** 分配菜单权限 */
  updateRoleMenus(roleId, data) {
    return httpRequest({ url: `${ROLE_BASE_URL}/${roleId}/menus`, method: "put", data });
  },
  /** 获取角色表单数据 */
  getFormData(id) {
    return httpRequest({ url: `${ROLE_BASE_URL}/${id}/form`, method: "get" });
  },
  /** 新增角色 */
  create(data) {
    return httpRequest({ url: `${ROLE_BASE_URL}`, method: "post", data });
  },
  /** 更新角色 */
  update(id, data) {
    return httpRequest({ url: `${ROLE_BASE_URL}/${id}`, method: "put", data });
  },
  /** 批量删除角色，多个以英文逗号(,)分割 */
  deleteByIds(ids) {
    return httpRequest({ url: `${ROLE_BASE_URL}/${ids}`, method: "delete" });
  }
};
export {
  RoleAPI as R
};
