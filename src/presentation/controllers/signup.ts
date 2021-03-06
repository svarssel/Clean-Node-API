import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { Controller } from '../protocols/controller'


export class SignUpController implements Controller{
  handle (httpRequest: HttpRequest): HttpResponse {
    const requireFields = ['name', 'email', 'passwordConfirmation']
    for (const field of requireFields) {
      if(!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}