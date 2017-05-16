import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingDisplayComponent } from './scrolling-display.component';

describe('ScrollingDisplayComponent', () => {
  let component: ScrollingDisplayComponent;
  let fixture: ComponentFixture<ScrollingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
