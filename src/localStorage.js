const _state = 'state';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(_state);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(_state, serializedState);
    } catch (err) {

    }
}