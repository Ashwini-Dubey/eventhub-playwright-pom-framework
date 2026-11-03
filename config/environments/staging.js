/**
 * Staging Environment Configuration
 *
 * Stores application settings specific to the Staging environment.
 * Environment variables are maintained in the root .env file.
 */

const stagingConfig = {
  name: "Staging",

  // Staging application URL
  baseURL: process.env.STAGING_BASE_URL,
};

export default stagingConfig;
