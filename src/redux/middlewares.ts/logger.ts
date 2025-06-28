export const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info(state.getState());
  const result = next(action);
  console.info("Next State", state.getState());
  console.groupEnd();
  return result;
}