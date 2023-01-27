import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDisplayFilterComponent } from './todo-display-filter.component';

describe('TodoDisplayFilterComponent', () => {
  let component: TodoDisplayFilterComponent;
  let fixture: ComponentFixture<TodoDisplayFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDisplayFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDisplayFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
