import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioFormularioComponent } from './usuario-formulario.component';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioFormularioComponent', () => {
  let component: UsuarioFormularioComponent;
  let fixture: ComponentFixture<UsuarioFormularioComponent>;
  let usuarioService: jasmine.SpyObj<UsuarioService>;

  const mockUsuario: Usuario = {
    id: 1,
    name: 'Leo',
    email: 'leo@email.com',
    password: '123',
    cpf: '12345678900'
  };

  beforeEach(async () => {
    const serviceSpy = jasmine.createSpyObj('UsuarioService', ['create', 'update']);

    await TestBed.configureTestingModule({
      imports: [UsuarioFormularioComponent, FormsModule, HttpClientTestingModule],
      providers: [
        { provide: UsuarioService, useValue: serviceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioFormularioComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService) as jasmine.SpyObj<UsuarioService>;

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar create e emitir evento ao cadastrar', () => {
    usuarioService.create.and.returnValue(of(mockUsuario));
    spyOn(component.usuarioAtualizado, 'emit');

    component.usuario = { ...mockUsuario };
    delete component.usuario.id; // remove o ID para simular cadastro

    component.salvar();

    expect(usuarioService.create).toHaveBeenCalled();
    expect(component.usuarioAtualizado.emit).toHaveBeenCalled();
  });

  it('deve chamar update e emitir evento ao editar', () => {
    usuarioService.update.and.returnValue(of(mockUsuario));
    spyOn(component.usuarioAtualizado, 'emit');

    component.usuario = { ...mockUsuario }; // tem ID → vai editar
    component.salvar();

    expect(usuarioService.update).toHaveBeenCalledWith(mockUsuario.id!, mockUsuario);
    expect(component.usuarioAtualizado.emit).toHaveBeenCalled();
  });

  it('deve limpar o formulário ao chamar limpar()', () => {
    component.usuario = { ...mockUsuario };
    component.limpar();
    expect(component.usuario.name).toBe('');
    expect(component.usuario.email).toBe('');
    expect(component.usuario.password).toBe('');
    expect(component.usuario.cpf).toBe('');
  });

  it('deve preencher o formulário quando recebe usuarioEditando', () => {
    component.usuarioEditando = mockUsuario;
    component.ngOnChanges();
    expect(component.usuario.name).toBe(mockUsuario.name);
    expect(component.usuario.email).toBe(mockUsuario.email);
  });
});
