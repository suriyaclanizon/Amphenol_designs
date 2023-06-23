import { action, persist } from "easy-peasy";

const loginModel = {
  isAuthenticated: false,
  setIsAuthenticated: action((state, payload) => {
    state.isAuthenticated = payload;
  }),
};

const persistedLoginModel = persist(loginModel, {
  storage: 'localStorage', // Choose the storage mechanism you prefer
  key: 'loginModel', // Unique key for the persisted state
});

export default persistedLoginModel;
