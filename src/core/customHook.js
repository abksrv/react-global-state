import { useEffect, useState } from "react";
const getMappedState = (storedState, mapState) => {
  return Object.keys(storedState)
    .filter(key => mapState.includes(key))
    .reduce((obj, key) => {
      obj[key] = storedState[key];
      return obj;
    }, {});
}

const compare = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (!obj1) return false;
  if (!obj1) return false;
  for (let prop in obj1) {
    if (obj1[prop] === obj2[prop]) continue;
    return false;
  }
  return true;
}

export function useComponentState(store, mapState = []) {

  const state = getMappedState(store.state, mapState);
  const publisher = useState(Object.create(null))[1];
  const registerListener = () => {
    const newListener = { oldState: {} };
    newListener.run = (newState) => {
      const mappedState = getMappedState(newState, mapState);
      if (!compare(mappedState, newListener.oldState)) {
        newListener.oldState = mappedState;
        publisher(mappedState);
      }
    }
    store.listeners.push(newListener);
    return newListener;
  }
  useEffect(() => {
    const newListener = registerListener();
    return () => {
      store.listeners = store.listeners.filter(
        (listener) => listener !== newListener
      );
    };
  }, []); // eslint-disable-line

  return [mapState.map(s => state[s]), store.actions];
}