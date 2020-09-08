import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdnotfoundComponent } from './idnotfound.component';

describe('IdnotfoundComponent', () => {
  let component: IdnotfoundComponent;
  let fixture: ComponentFixture<IdnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
