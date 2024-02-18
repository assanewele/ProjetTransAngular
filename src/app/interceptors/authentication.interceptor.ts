import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders()
    .append('Authorization', `Bearer ${localStorage.getItem("token")}`);
  const modifiedRequest = req.clone({headers})
  return next(modifiedRequest);
};
