interface Configs {
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
}

export const configs: Configs = {
  GOOGLE_ID: process.env.GOOGLE_ID || "",
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || "",
};
