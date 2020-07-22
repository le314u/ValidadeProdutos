import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaProdutoComponent } from './instancia-produto.component';

describe('InstanciaProdutoComponent', () => {
  let component: InstanciaProdutoComponent;
  let fixture: ComponentFixture<InstanciaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
