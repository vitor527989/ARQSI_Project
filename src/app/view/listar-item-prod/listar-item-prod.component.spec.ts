import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarItemProdComponent } from './listar-item-prod.component';

describe('ListarItemProdComponent', () => {
  let component: ListarItemProdComponent;
  let fixture: ComponentFixture<ListarItemProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarItemProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarItemProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
