import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemCompraResumoComponent } from './ordem-compra-resumo.component';

describe('OrdemCompraResumoComponent', () => {
  let component: OrdemCompraResumoComponent;
  let fixture: ComponentFixture<OrdemCompraResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemCompraResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemCompraResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
