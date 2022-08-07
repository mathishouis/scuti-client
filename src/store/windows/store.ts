export const windows = {
    state: {
        navigator: {
            visible: false,
        }
    },
    mutations: {
        setVisible(state: {}, props: { name: string, visible: boolean }): void {
            state[props.name].visible = props.visible;
        },
        /*setTitle(state: {}, props: { name: string, title: string }): void {
            state[props.name].title = props.title;
        }*/
    },
    getters: {
        getVisible: (state: {}) => (name: string): boolean => {
            return state[name].visible;
        },
        /*getTitle: (state: {}) => (name: string): {} => {
            return state[name].title;
        }*/
    }
}