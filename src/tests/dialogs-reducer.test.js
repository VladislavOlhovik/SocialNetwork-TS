import { v1 } from "uuid";
import dialogsReducer, { addMessageActionCreator } from "../Redux/dialogs-reducer";

const state = {
  messagesData: [
    { id: v1(), message: "Hi" },
    { id: v1(), message: "How is your it-kamasutra" },
    { id: v1(), message: "Yo" },
    { id: v1(), message: "Yo" },
    { id: v1(), message: "Yo" },
  ],
};

test("user authorization", () => {

  const action = addMessageActionCreator('Jest');

  const newState = dialogsReducer(state, action);

  expect(newState.messagesData.length).toBe(6);
  expect(newState.messagesData[5].message).toBe('Jest');
  expect(newState.messagesData[0].message).toBe('Hi');
});
