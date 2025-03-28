import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService, Usuario } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-formulario.component.html',
  styleUrls: ['./usuario-formulario.component.scss']
})
export class UsuarioFormularioComponent {
  @Output() usuarioAtualizado = new EventEmitter<void>();
  @Input() usuarioEditando: Usuario | null = null;

  usuario: Usuario = { name: '', email: '', password: '', cpf: '' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnChanges(): void {
    if (this.usuarioEditando) {
      this.usuario = { ...this.usuarioEditando };
    }
  }

  salvar() {
    if (this.usuario.id) {
      this.usuarioService.update(this.usuario.id, this.usuario).subscribe(() => {
        alert('Usuário atualizado com sucesso!');
        this.limpar();
        this.usuarioAtualizado.emit();
      });
    } else {
      this.usuarioService.create(this.usuario).subscribe(() => {
        alert('Usuário criado com sucesso!');
        this.limpar();
        this.usuarioAtualizado.emit();
      });
    }
  }

  limpar() {
    this.usuario = { name: '', email: '', password: '', cpf: '' };
    this.usuarioEditando = null;
  }
}
