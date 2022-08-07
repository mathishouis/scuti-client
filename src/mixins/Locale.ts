import Locales from './../assets/locales/';

export default {
    methods: {
        __locale(key: string): string {
            let locale: {} = Locales[this.__config('locale')];
            if(!locale[key]) {
                return key;
            }
            return locale[key];
        }
    }

}