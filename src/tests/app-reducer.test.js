import appReducer, { initializedSuccess } from "../Redux/app-reducer";

const state = {
  initialized: false,
}

test('initialized success', () => {

  const action = initializedSuccess()

  const newState = appReducer(state, action)

  expect(newState.initialized).toBe(true);
});