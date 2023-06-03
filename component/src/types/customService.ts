import {RequestInterceptor, ResponseInterceptor} from './interceptors';
import {RequestSettings} from './requestSettings';
import {MessageLimits} from './chatLimits';
import {Result} from './result';
import {Demo} from './demo';

export type CustomServiceConfig = {
  request?: RequestSettings;
  requestInterceptor?: RequestInterceptor;
  responseInterceptor?: ResponseInterceptor;
  stream?: boolean;
  // automatically display all error messages from the service, all others automatically default
  // to the normal error structure -> type of message -> default -> 'Error, please try again.'
  displayServiceErrorMessages?: boolean;
  demo?: Demo;
  [key: string]: unknown;
} & MessageLimits; // totalMessagesMaxCharLength only applies when no files

export interface CustomServiceResponse {
  result?: Result;
  error?: string;
}
