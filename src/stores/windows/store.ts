export const windows = {
    state: {
        navigator: {
            title: 'Navigator',
            visible: false,
        }
    },
    mutations: {
        setVisible(state: {}, props: { name: string, visible: boolean }): void {
            state[props.name].visible = props.visible;
        }
    },
    getters: {
        getVisible: (state: {}) => (name: string): boolean => {
            return state[name].visible;
        }
    }
}