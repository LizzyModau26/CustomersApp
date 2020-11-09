import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResViewPage } from './res-view.page';

describe('ResViewPage', () => {
  let component: ResViewPage;
  let fixture: ComponentFixture<ResViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
