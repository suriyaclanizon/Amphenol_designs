import { action, persist} from "easy-peasy";


const tabModel = {
  activeIndex: 0,
  traineesList: null,
  gameScoreStatus: null,
  detailedGameScoreStatus: null,
  isAuthenticated: false,

  setActiveIndex: action((state, payload) => {
    state.activeIndex = payload;
  }),

  setTraineesList: action((state, payload) => {
    state.traineesList = payload;
  }),

  setGameScoreStatus: action((state, payload) => {
    state.gameScoreStatus = payload;
  }),
  
  setDetailedGameScoreStatus: action((state, payload) => {
    state.detailedGameScoreStatus = payload;
  }),

  setIsAuthenticated: action((state, payload) => {
    state.isAuthenticated = payload;
  }),
  
};

export default tabModel;