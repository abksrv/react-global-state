export const incrA = (store) => {
    store.setState({ a: store.state.a+1 });
}