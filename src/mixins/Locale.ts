import Locales from "@/assets/locales/";

export default {
  methods: {
    __locale(key: string): string {
      // @ts-ignore
      const locale: unknown = Locales[this.__config("locale")];
      // @ts-ignore
      if (!locale[key]) {
        return key;
      }
      // @ts-ignore
      return locale[key];
    },
  },
};
