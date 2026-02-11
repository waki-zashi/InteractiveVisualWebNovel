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
  },

  dogsGameCompleted: false,

  dogsGame: {
    active: false,
    duration: 20000,      // ⏱ длительность игры (20 секунд)
    elapsed: 0,
    attempts: 0,

    maxRage: 1,           // 🔺 максимум ярости (1 = 100%)
    ragePerSecond: 0.25,  // 🔥 скорость накопления ярости
    clickReduce: 0.35,    // 👆 сколько снимается за клик

    dogs: [
      { rage: 0 },
      { rage: 0 },
      { rage: 0 }
    ],

    raf: null
  }
};
