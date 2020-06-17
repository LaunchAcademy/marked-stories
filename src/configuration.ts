const config = {
  clubhouse: {
    apiToken: process.env.CLUBHOUSE_TOKEN,
    projectId: parseInt(process.env.CLUBHOUSE_PROJECT_ID || "", 10),
  },
};

export default config;
