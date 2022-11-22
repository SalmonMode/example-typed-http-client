/**
 * This is thrown when no activity could be found given the search criteria.
 */
export class NoActivityFoundError extends TypeError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, NoActivityFoundError.prototype);
    this.name = new.target.name;
  }
}

/**
 * This is thrown when the query failed due to a problem with its arguments.
 */
export class SearchQueryArgumentError extends TypeError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, SearchQueryArgumentError.prototype);
    this.name = new.target.name;
  }
}

/**
 * This is thrown when the query failed due to an unrecognized problem.
 */
export class UnrecognizedQueryResponseError extends TypeError {
  constructor(message?: string) {
    super(message);

    Object.setPrototypeOf(this, UnrecognizedQueryResponseError.prototype);
    this.name = new.target.name;
  }
}
