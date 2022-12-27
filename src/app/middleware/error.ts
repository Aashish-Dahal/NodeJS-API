import { CustomError } from "ts-custom-error";

class ErrorResponse extends CustomError {
  constructor(message: string, statusCode: number) {
    super(message);
  }
}
