export const ENVS = {
  LOCAL: 'local',
};

export const LOCAL_PORT = 3100;

export const base = {
  PORT: process.env.PORT || LOCAL_PORT,
  CLIENT_SRC: './src',
};
