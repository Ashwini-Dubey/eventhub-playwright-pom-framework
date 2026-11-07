const generateUniqueEmail = () => {
  return `testuser${Date.now()}@test.com`;
};

const generateUniqueEventName = () => {
  return `Test Event ${Date.now()}`;
};

export { generateUniqueEmail };
export { generateUniqueEventName };
