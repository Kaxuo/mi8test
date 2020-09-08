import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerdownComponent } from './serverdown.component';

describe('ServerdownComponent', () => {
  let component: ServerdownComponent;
  let fixture: ComponentFixture<ServerdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
