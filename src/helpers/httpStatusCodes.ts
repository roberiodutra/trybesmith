enum HttpStatus {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  Conflict = 409,
  Unprocessable = 422,
  InternalServer = 500,
}

export default HttpStatus;
