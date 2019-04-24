import { TestBed } from '@angular/core/testing';

import { CadastroService } from './cadastro.service';

describe('CadastroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroService = TestBed.get(CadastroService);
    expect(service).toBeTruthy();
  });
});
