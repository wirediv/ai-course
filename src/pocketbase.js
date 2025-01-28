import PocketBase from "pocketbase";

//initialize pocketbase
const app = (() => {
  const POCKETBASE_URL = 'https://pocketbase-ai.wirediv.dev/';
  return new PocketBase(POCKETBASE_URL);
})();

//pass authstore to be used to callback when the user is authenticated
export const auth = app.authStore;

//clears the auth and logs the user out
export const logout = (afterAction = () => {}) => {
  app.authStore.clear();
  afterAction(null);
};

//method to authenticate the user with pocketbase
export const signIn = async (email, password) => {
  try {
    await app.collection("users").authWithPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};