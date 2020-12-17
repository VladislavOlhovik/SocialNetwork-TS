import { v1 } from "uuid";
import profileReducer, {
  addPostActionCreator,
  setUserProfile,
  setStatus,
} from "../Redux/profile-reducer";

const state = {
  postData: [
    { id: v1(), message: "Hi, how are you?", likeCounts: 12 },
    { id: v1(), message: "It's my first post", likeCounts: 11 },
  ],
  profile: null,
  status: "",
};

test("post added successfully", () => {
  const action = addPostActionCreator("Jest");

  const newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(3);
  expect(newState.postData[0].message).toBe("Jest");
  expect(newState.postData[2].likeCounts).toBe(11);
});

test("post added successfully", () => {
  const profile = {
    aboutMe: null,
    contacts: {
      facebook: null,
      github: null,
      instagram: null,
      mainLink: null,
      twitter: null,
      vk: null,
      website: null,
      youtube: null,
    },
    fullName: "Alhovik",
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: { small: null, large: null },
    userId: 12338,
  };
  const action = setUserProfile(profile);

  const newState = profileReducer(state, action);

  expect(newState.profile.fullName).toBe("Alhovik");
  expect(newState.profile.userId).toBe(12338);
});

test("status added successfully", () => {
  const action = setStatus('Lesson');

  const newState = profileReducer(state, action);

  expect(newState.status).toBe('Lesson');
});
