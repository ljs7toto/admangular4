import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdgroupsOnComponent } from './adgroups-on.component';

describe('AdgroupsOnComponent', () => {
  let component: AdgroupsOnComponent;
  let fixture: ComponentFixture<AdgroupsOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdgroupsOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdgroupsOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
