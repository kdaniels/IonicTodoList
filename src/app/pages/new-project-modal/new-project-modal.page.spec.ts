import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProjectModalPage } from './new-project-modal.page';

describe('NewProjectModalPage', () => {
  let component: NewProjectModalPage;
  let fixture: ComponentFixture<NewProjectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProjectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
