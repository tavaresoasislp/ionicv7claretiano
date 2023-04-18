import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoasvindasPage } from './boasvindas.page';

describe('BoasvindasPage', () => {
  let component: BoasvindasPage;
  let fixture: ComponentFixture<BoasvindasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoasvindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
