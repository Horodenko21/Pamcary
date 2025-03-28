import { TestBed } from '@angular/core/testing';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService],
    });
    service = TestBed.inject(UsuarioService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('deve buscar todos os usuários', () => {
    const mockUsuarios: Usuario[] = [
      { id: 1, name: 'Leo', email: 'leo@email.com', password: '123', cpf: '12345678900' }
    ];

    service.getAll().subscribe(usuarios => {
      expect(usuarios.length).toBe(1);
      expect(usuarios).toEqual(mockUsuarios);
    });

    const req = http.expectOne('http://localhost:3000/pessoas');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsuarios);
  });
});
