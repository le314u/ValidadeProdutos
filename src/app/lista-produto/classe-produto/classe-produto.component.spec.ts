import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseProdutoComponent } from './classe-produto.component';

describe('ClasseProdutoComponent', () => {
  let component: ClasseProdutoComponent;
  let fixture: ComponentFixture<ClasseProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
