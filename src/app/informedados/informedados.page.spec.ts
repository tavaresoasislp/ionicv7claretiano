import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformedadosPage } from './informedados.page';

describe('InformedadosPage', () => {
  let component: InformedadosPage;
  let fixture: ComponentFixture<InformedadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformedadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
