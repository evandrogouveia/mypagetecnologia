import { TestBed } from '@angular/core/testing';

import { CadastroAgendaayService } from './cadastro-agendaay.service';

describe('CadastroAgendaayService', () => {
  let service: CadastroAgendaayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroAgendaayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
