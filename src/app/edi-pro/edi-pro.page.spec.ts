import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdiProPage } from './edi-pro.page';

describe('EdiProPage', () => {
  let component: EdiProPage;
  let fixture: ComponentFixture<EdiProPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiProPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdiProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
