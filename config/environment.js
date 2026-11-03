/**
 * Environment Configuration Manager
 * Selects the environment based on TEST_ENV.
 */

import "dotenv/config";

import qaConfig from "./environments/qa.js";
import stagingConfig from "./environments/staging.js";

const environment = process.env.TEST_ENV || "qa";

const environmentConfigs = {
  qa: qaConfig,
  staging: stagingConfig,
};

const selectedConfig = environmentConfigs[environment.toLowerCase()];

export default selectedConfig;
