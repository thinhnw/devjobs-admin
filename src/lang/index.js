import { createI18n } from "vue-i18n-lite";
import Cookies from "js-cookie";
// import elementViLocale from 'element-ui/lib/locale/lang/vi' // element-ui lang
import en from "./en";
import vi from "./vi";

const messages = {
  en: {
    ...en,
  },
  vi: {
    ...vi,
  },
};

const i18n = createI18n({
  locale: Cookies.get("language") || "en",
  messages,
});

export default i18n;
