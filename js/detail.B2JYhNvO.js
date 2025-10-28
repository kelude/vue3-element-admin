import { d as defineComponent, ap as useRoute, aM as useTagsViewStore, ab as h, ay as router } from "./index.CjDU5CMT.js";
import { E as ElButton } from "./index.D2tRBopO.js";
const ToDetail = defineComponent({
  name: "ToDetail",
  setup() {
    const route = useRoute();
    const tagsViewStore = useTagsViewStore();
    const navigateToDetail = async (id) => {
      await router.push({
        path: "/detail/" + id,
        query: { message: `msg${id}` }
      });
      tagsViewStore.updateTagName(route.fullPath, `详情页缓存(id=${id})`);
    };
    return () => h("div", null, [
      h(
        ElButton,
        {
          type: "primary",
          onClick: () => navigateToDetail(1)
        },
        { default: () => "跳转详情1" }
      ),
      h(
        ElButton,
        {
          type: "success",
          onClick: () => navigateToDetail(2)
        },
        { default: () => "跳转详情2" }
      )
    ]);
  }
});
export {
  ToDetail as T
};
