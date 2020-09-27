export const incrB = (store) => {
    store.setState({ b: store.state.b + 1 });
}