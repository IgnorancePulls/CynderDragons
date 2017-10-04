import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFoundModalComponent } from './match-found-modal.component';

describe('MatchFoundModalComponent', () => {
  let component: MatchFoundModalComponent;
  let fixture: ComponentFixture<MatchFoundModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchFoundModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchFoundModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
