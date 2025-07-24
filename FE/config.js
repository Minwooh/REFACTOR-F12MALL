const ENV = 'DEV';
//const ENV = 'STAG';
//const ENV = 'PROD';

export const CONFIG = {
  ENV,
  ...{
    DEV: {
      API_BASE_URL: 'http://localhost:8090/api',
    },
    STAG: {
      API_BASE_URL: 'https://f12mall-dev.avgmax.team/api',
    },
    PROD: {
      API_BASE_URL: 'https://f12mall.avgmax.team/api',
    },
  }[ENV],
};
