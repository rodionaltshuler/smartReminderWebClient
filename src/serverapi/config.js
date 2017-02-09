let googleCloudConfig = {
  baseUrl: 'https://smart-reminder-us.appspot.com',
  baseApiUrl: 'https://smart-reminder-us.appspot.com/api/v1',
  fbAppId: '1203169209731550'
};

let localConfig = {
  baseUrl: 'http://localhost:3001',
  baseApiUrl: 'http://localhost:3001/api/v1',
  fbAppId: '1203169209731550'
};

let configs = {
  google: googleCloudConfig,
  local: localConfig
};

let config;

if (process.env.CONFIG && configs[process.env.CONFIG]) {
  config = configs[process.env.CONFIG];
  console.log("Using config %s", JSON.stringify(configs[process.env.CONFIG]));
} else {
  config = configs.local;
  console.log("no process.env.CONFIG variable defined or defined config doesn't exist - using local");
}

export default config;
