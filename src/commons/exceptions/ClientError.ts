class ClientError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);

    if (this.constructor.name === 'ClientError') {
      throw new Error('Cannot call ClientError directly');
    }

    this.name = 'ClientError';
    this.statusCode = statusCode;
  }
}

export default ClientError;
