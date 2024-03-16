import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brother3Component } from './brother3.component';

describe('Brother3Component', () => {
  let component: Brother3Component;
  let fixture: ComponentFixture<Brother3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Brother3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Brother3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
