import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class OtherPageGuardService implements CanActivate{
  constructor(public router: Router){}

  canActivate(): boolean {
    this.router.navigateByUrl("/");
    return false; // false 는 라우트 되지 않음(빈페이지 나타냄) // true로 해야 라우트 됨
  }

}
