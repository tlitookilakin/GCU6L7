import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFullComponent } from './person-full.component';

describe('PersonFullComponent', () => {
  let component: PersonFullComponent;
  let fixture: ComponentFixture<PersonFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
