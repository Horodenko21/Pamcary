import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  cpfBusca: string = '';
  erroBusca: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.buscarUsuarios();
    this.usuarioService.getAll().subscribe({
      next: (data) => {
        console.log('Dados recebidos:', data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }
  buscarUsuarios(): void {
    this.usuarioService.getAll().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Erro ao buscar usuários:', err);
      }
    });
  }

  buscarPorCpf(): void {
    this.erroBusca = '';
    if (!this.cpfBusca.trim()) {
      this.buscarUsuarios();
      return;
    }

    this.usuarioService.getByCpf(this.cpfBusca).subscribe({
      next: (usuario) => this.usuarios = [usuario],
      error: () => {
        this.usuarios = [];
        this.erroBusca = 'Usuário não encontrado com este CPF.';
      }
    });
  }

  @Output() editarUsuario = new EventEmitter<Usuario>();
  editar(usuario: Usuario) {
    this.editarUsuario.emit(usuario);
  }

  deletarUsuario(id: number): void {
    if (!confirm('Tem certeza que deseja excluir este usuário?')) return;
  
    this.usuarioService.delete(id).subscribe({
      next: () => {
        alert('Usuário excluído com sucesso!');
        this.buscarUsuarios(); // atualiza a lista
      },
      error: () => {
        alert('Erro ao excluir usuário.');
      }
    });
  }  
  
}
