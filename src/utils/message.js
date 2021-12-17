import * as Vue from "vue";
import i18n from "@/lang";
import { Status } from "./constants";

export function showSuccess(key) {
  Vue.prototype.$message({
    message: i18n.t(key),
    type: "success",
    duration: 3000
  });
}
