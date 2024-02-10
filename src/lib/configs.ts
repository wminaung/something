interface Configs {
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
  apiBaseUrl: string;
}

export const configs: Configs = {
  GOOGLE_ID: process.env.GOOGLE_ID || "",
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || "",
  apiBaseUrl: "http://localhost:3000/api",
};
