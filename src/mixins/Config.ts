import Config from './../../scuti.json';

export default {
    methods: {
        __config(key: string): (string | {}) {
            let keys: string[] = key.split(".");
            let value: (string | {}) = Config;
            keys.forEach((k) => {
                 value = value[k];
            });
            const regExp: RegExp = new RegExp(/\$\{([^}]+)\}/, 'g');
            const variables: [] = Array.from(value.matchAll(regExp), m => m[0]);
            variables.forEach((variable) => {
                keys = variable.slice(2).slice(0, -1).split(".");
                let variableValue: (string | {}) = Config;
                keys.forEach((k) => {
                    variableValue = variableValue[k];
                });
                value = value.replace(variable, variableValue);
            });
            return value;
        }
    }

}