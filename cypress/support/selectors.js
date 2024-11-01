export const loginSelectors = {
  username: '[data-cy="username"]',
  password: '[data-cy="password"]',
  loginButton: '[data-cy="submit"]',
  errorMessage: '[data-cy="loginError"]',
};

export const registrationSelectors = {
  username: '[data-cy="username"]',
  email: '[data-cy="email"]',
  password: '[data-cy="firstPassword"]',
  passwordConfirmation: '[data-cy="secondPassword"]',
  registerButton: '[data-cy="submit"]',
  wrongEmailMessage: "#email + .invalid-feedback",
};
