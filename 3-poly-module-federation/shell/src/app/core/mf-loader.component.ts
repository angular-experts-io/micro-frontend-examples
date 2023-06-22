import {ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef, OnInit, Input} from "@angular/core";
import {loadRemoteModule} from "@angular-architects/module-federation";

@Component({
  standalone: true,
  selector: 'mf-loader',
  template: `
    <ng-container #placeholder></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MfLoaderComponent implements OnInit {
  @ViewChild('placeholder', {static: true, read: ViewContainerRef}) placeholder!: ViewContainerRef;
  @Input({required: true}) remoteModuleName!: string;
  @Input() remoteModuleEntryName = './Component';

  async ngOnInit(): Promise<void> {
    this.placeholder.clear();
    const component = await loadRemoteModule(this.remoteModuleName, this.remoteModuleEntryName);
    this.placeholder.createComponent(component.AppComponent);
  }
}
