import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdcTopAppBarWithTabsComponent } from './mdc-top-app-bar-with-tabs.component';

describe('MdcTopAppBarWithTabsComponent', () => {
  let component: MdcTopAppBarWithTabsComponent;
  let fixture: ComponentFixture<MdcTopAppBarWithTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdcTopAppBarWithTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdcTopAppBarWithTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
