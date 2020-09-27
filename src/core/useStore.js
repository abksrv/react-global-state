import { associateActions } from "./associateActions";
import { useComponentState } from "./customHook";

const useStore = (initialState = {}, actions) => {
  const store = {
    state: initialState,
    listeners: [],
    setState: function (newState, afterUpdateCallback) {
      this.state = { ...this.state, ...newState };
      this.runListeners();
      afterUpdateCallback && afterUpdateCallback();
    },
    runListeners: function () {
      this.listeners.forEach((listener) => {
        listener.run(store.state);
      });
    },
  };
  store.actions = associateActions(store, actions);
  return useComponentState.bind(null, store);
};

export default useStore;