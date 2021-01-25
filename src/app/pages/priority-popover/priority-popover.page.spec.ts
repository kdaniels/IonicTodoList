import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PriorityPopoverPage } from './priority-popover.page';

describe('PriorityPopoverPage', () => {
  let component: PriorityPopoverPage;
  let fixture: ComponentFixture<PriorityPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PriorityPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
