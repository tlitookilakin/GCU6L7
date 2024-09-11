import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSmallComponent } from './person-small.component';

describe('PersonSmallComponent', () => {
  let component: PersonSmallComponent;
  let fixture: ComponentFixture<PersonSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
