import {Component, inject} from '@angular/core';
import {UserService} from "@nx-dynamic-mf/shared/data-access-user";

@Component({
  selector: 'nx-dynamic-mf-todo-entry',
  template: `{{userService.isUserLoggedIn$ | async}}`
})
export class RemoteEntryComponent {
  userService = inject(UserService);
}
