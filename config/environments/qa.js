/**
 * QA Environment Configuration
 *
 * Stores application settings specific to the QA environment.
 * Environment variables are maintained in the root .env file.
 */

const qaConfig = {
  name: "QA",

  // QA application URL
  baseURL: process.env.QA_BASE_URL,
};

export default qaConfig;
