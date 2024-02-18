import { HttpStatusCode } from "../../enums/http-status-code";

export interface ApiResponseModel<T> {
  success: boolean;
  data: T;
  message: string;
  statusCode: HttpStatusCode;
  token?: string;
}
