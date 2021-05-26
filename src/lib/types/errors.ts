type ErrorMessage = string | undefined;

class ApplicationError extends Error {
  constructor(message: ErrorMessage) {
    super(message);
    this.name = 'Application Error';
  }
}

export class UnexpectedError extends Error {
  constructor(message: ErrorMessage) {
    super(message);
    this.name = 'Unexpected Error';
  }
}

export class PageNotFoundError extends ApplicationError {
  constructor() {
    super(`Page not found`);
  }
}
