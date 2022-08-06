enum errorMessages {
  InternalError = 'Error when trying to perform operation',
  InvalidLogin = 'Username or password invalid',
  TokenNotFound = 'Token not found',
  InvalidToken = 'Invalid token',
  ProductsIdsOnlyNumbers = '"productsIds" must include only numbers',
};

export default errorMessages;
