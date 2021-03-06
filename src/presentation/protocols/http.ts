export interface HttpResponse {
  statusCode: number
  body: any
}
export interface HttpRequest {
  [x: string]: any;
  body?: any
}