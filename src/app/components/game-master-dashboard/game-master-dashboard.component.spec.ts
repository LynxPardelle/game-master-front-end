import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMasterDashboardComponent } from './game-master-dashboard.component';

describe('GameMasterDashboardComponent', () => {
  let component: GameMasterDashboardComponent;
  let fixture: ComponentFixture<GameMasterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameMasterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
