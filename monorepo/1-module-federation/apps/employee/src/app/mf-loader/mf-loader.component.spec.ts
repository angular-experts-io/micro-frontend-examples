import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MfLoaderComponent } from './mf-loader.component';

describe('MfLoaderComponent', () => {
  let component: MfLoaderComponent;
  let fixture: ComponentFixture<MfLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MfLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MfLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
