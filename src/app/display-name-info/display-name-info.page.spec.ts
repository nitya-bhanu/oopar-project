import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayNameInfoPage } from './display-name-info.page';

describe('DisplayNameInfoPage', () => {
  let component: DisplayNameInfoPage;
  let fixture: ComponentFixture<DisplayNameInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisplayNameInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
