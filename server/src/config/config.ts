interface Config {
  port: number;
  databaseUri: string;
  accessTokenSecret: string;
  refreshTokenSecret: string;
}

const PORT = process.env.PORT || 3000;

export const config: Config = {
  port: +PORT,
  databaseUri: process.env.DATABASE || '',

  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'accessTokenSecret',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'refreshTokenSecret',
};
