import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateChild,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class QuestionCanActivateChildGuard implements CanActivateChild {
    canActivateChild(
        _childRoute: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return prompt('Вы действительно хотите посетить дочернюю страницу?') === 'y';
    }
}
