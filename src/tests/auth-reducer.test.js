import authReducer, { setAuthUserData } from "../Redux/auth-reducer";

const state = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

test("user authorization", () => {
  const action = setAuthUserData(1,"React", "JS", true);

  const newState = authReducer(state, action);

  expect(newState.id).toBe(1);
  expect(newState.login).toBe("React");
  expect(newState.email).toBe("JS");
  expect(newState.isAuth).toBe(true);
});
