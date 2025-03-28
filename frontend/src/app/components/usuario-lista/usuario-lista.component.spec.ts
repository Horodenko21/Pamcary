import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioListaComponent } from './usuario-lista.component';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario-lista',
  template: ''
})
class MockUsuarioListaComponent {
  @Input() usuarios: Usuario[] = [];
  @Output() editarUsuario = new EventEmitter<Usuario>();
}

describe('UsuarioListaComponent', () => {
  let component: UsuarioListaComponent;
  let fixture: ComponentFixture<UsuarioListaComponent>;
  let usuarioService: jasmine.SpyObj<UsuarioService>;

  const usuariosMock: Usuario[] = [
    { id: 1, name: 'Leo', email: 'leo@email.com', password: '123', cpf: '12345678900' },
    { id: 2, name: 'Ana', email: 'ana@email.com', password: '123', cpf: '98765432100' }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UsuarioService', ['getAll', 'delete']);

    await TestBed.configureTestingModule({
      imports: [UsuarioListaComponent],
      providers: [{ provide: UsuarioService, useValue: spy }]
    }).compileComponents();

    usuarioService = TestBed.inject(UsuarioService) as jasmine.SpyObj<UsuarioService>;
    usuarioService.getAll.and.returnValue(of(usuariosMock));
    usuarioService.delete.and.returnValue(of(void 0));

    fixture = TestBed.createComponent(UsuarioListaComponent);
    component = fixture.componentInstance;
    component.usuarios = usuariosMock;

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir o evento de edição ao clicar em "Editar"', () => {
    spyOn(component.editarUsuario, 'emit');
    const editarBtn = fixture.debugElement.queryAll(By.css('button.btn-warning'))[0];
    editarBtn.triggerEventHandler('click');
    expect(component.editarUsuario.emit).toHaveBeenCalledWith(usuariosMock[0]);
  });

  it('deve chamar o service de delete ao clicar em "Excluir"', () => {
    spyOn(window, 'confirm').and.returnValue(true); // simula confirmação
    const excluirBtn = fixture.debugElement.queryAll(By.css('button.btn-danger'))[0];
    excluirBtn.triggerEventHandler('click');
    expect(usuarioService.delete).toHaveBeenCalledWith(usuariosMock[0].id!);
  });
});
