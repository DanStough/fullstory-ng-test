import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTableComponent } from './github-table.component';

describe('GithubTableComponent', () => {
  let component: GithubTableComponent;
  let fixture: ComponentFixture<GithubTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
