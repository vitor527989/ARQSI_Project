import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrataFilhosComponent } from './trata-filhos.component';

describe('TrataFilhosComponent', () => {
  let component: TrataFilhosComponent;
  let fixture: ComponentFixture<TrataFilhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrataFilhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrataFilhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
