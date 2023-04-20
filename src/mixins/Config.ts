// @ts-ignore
import Config from "../../scuti.json";

export default {
  methods: {
    __config(key: string): string | unknown {
      let keys: string[] = key.split(".");
      let values: string | unknown = Config;
      keys.forEach((k: string) => {
        // @ts-ignore
        values = values[k];
      });
      const regExp: unknown = new RegExp(/\$\{([^}]+)\}/, "g");
      // @ts-ignore
      const variables: [] = Array.from(values.matchAll(regExp), (m) => m[0]);
      variables.forEach((variable) => {
        // @ts-ignore
        keys = variable.slice(2).slice(0, -1).split(".");
        let variableValue: string | unknown = Config;
        keys.forEach((k) => {
          // @ts-ignore
          variableValue = variableValue[k];
        });
        // @ts-ignore
        values = values.replace(variable, variableValue);
      });
      return values;
    },
  },
};
