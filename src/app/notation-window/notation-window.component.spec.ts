import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationWindowComponent } from './notation-window.component';

describe('NotationWindowComponent', () => {
  let component: NotationWindowComponent;
  let fixture: ComponentFixture<NotationWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotationWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
