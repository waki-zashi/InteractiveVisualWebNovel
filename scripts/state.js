export const state = {
  currentScene: "scene_1",
  textIndex: 0,
  waitingForChoice: false,
  choiceTimeout: null,
  choiceReady: false,

  history: [],
  isTextStarted: false,
  introTimeout: null,
  introFadeTimeout: null,

  transitionTimeout: null,
  navId: 0,

  isTransitioning: false,
  isItemShowing: false,

  sleepGameCompleted: false,
  sleepGame: {
    active: false,
    darkness: 0,
    speed: 0.003,
    elapsed: 0,
    duration: 20000,
    attempts: 0,
    raf: null
  }
};
