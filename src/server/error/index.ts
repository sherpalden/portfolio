class BadRequest extends Error {
  statusCode: number;
  errors: any;
  constructor(message: string, errors = []) {
    super(message);
    this["errors"] = errors;
    this["statusCode"] = 400;
  }
}

class NotAuthorized extends Error {
  statusCode: number;
  errors: any;
  constructor(message: string, errors = []) {
    super(message);
    this["errors"] = errors;
    this["statusCode"] = 401;
  }
}

class NotFound extends Error {
  statusCode: number;
  errors: any;
  constructor(message: string, errors = []) {
    super(message);
    this["errors"] = errors;
    this["statusCode"] = 404;
  }
}

class Forbidden extends Error {
  statusCode: number;
  errors: any;
  constructor(message: string, errors = []) {
    super(message);
    this["errors"] = errors;
    this["statusCode"] = 403;
  }
}

class InternalError extends Error {
  statusCode: number;
  errors: any;
  constructor(message: string, errors = []) {
    super(message);
    this["errors"] = errors;
    this["statusCode"] = 500;
  }
}

export { BadRequest, NotAuthorized, NotFound, InternalError, Forbidden };
