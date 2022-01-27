import ClientError from './ClientError';

class NotFoundError extends ClientError {
  constructor(message: string) {
    super(message, 404);

    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

export default NotFoundError;
