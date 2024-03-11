import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAgendaayComponent } from './cadastro-agendaay.component';

describe('CadastroAgendaayComponent', () => {
  let component: CadastroAgendaayComponent;
  let fixture: ComponentFixture<CadastroAgendaayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroAgendaayComponent]
    });
    fixture = TestBed.createComponent(CadastroAgendaayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
