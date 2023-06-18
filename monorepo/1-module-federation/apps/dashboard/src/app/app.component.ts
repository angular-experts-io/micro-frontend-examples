import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "@nx-dynamic-mf/shared/data-access-user";
import {Router} from "@angular/router";
import {distinctUntilChanged} from "rxjs";

@Component({
  selector: 'nx-dynamic-mf-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
})
export class AppComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('login');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }

}
