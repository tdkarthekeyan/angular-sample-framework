import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebViewerComponent } from './web-viewer.component';

describe('WebViewerComponent', () => {
  let component: WebViewerComponent;
  let fixture: ComponentFixture<WebViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
