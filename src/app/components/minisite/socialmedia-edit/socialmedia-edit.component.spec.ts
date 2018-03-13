import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaEditComponent } from './socialmedia-edit.component';

describe('SocialmediaEditComponent', () => {
  let component: SocialmediaEditComponent;
  let fixture: ComponentFixture<SocialmediaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
