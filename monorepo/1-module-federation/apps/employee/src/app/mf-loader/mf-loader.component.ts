import {Component, ComponentFactoryResolver, inject, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from "@nx/angular/mf";

@Component({
  selector: 'nx-dynamic-mf-mf-loader',
  template: `
    <h1>Dynamic MF</h1>
    <ng-container #placeholder></ng-container>
  `
})
export class MfLoaderComponent implements OnInit {
  @ViewChild('placeholder', {read: ViewContainerRef, static: true}) placeholderVC!: ViewContainerRef;

  async ngOnInit() {
    this.placeholderVC.clear();
    const component = await
        loadRemoteModule('login', './Component');
    console.log('component', component);
    this.placeholderVC.createComponent(component.RemoteEntryComponent);
  }
}
