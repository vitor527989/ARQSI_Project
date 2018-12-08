import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarItemProdutoComponent } from './criar-item-produto.component';

describe('CriarItemProdutoComponent', () => {
  let component: CriarItemProdutoComponent;
  let fixture: ComponentFixture<CriarItemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarItemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarItemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
