import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnterNameInfoPage } from './enter-name-info.page';

describe('EnterNameInfoPage', () => {
  let component: EnterNameInfoPage;
  let fixture: ComponentFixture<EnterNameInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnterNameInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
