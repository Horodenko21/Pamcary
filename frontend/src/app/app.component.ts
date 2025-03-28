import { Component } from '@angular/core';
import { Usuario } from './services/usuario.service';
import { UsuarioFormularioComponent } from './components/usuario-formulario/usuario-formulario.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UsuarioFormularioComponent,
    UsuarioListaComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  usuarioParaEditar: Usuario | null = null;

  selecionarUsuario(usuario: Usuario) {
    this.usuarioParaEditar = usuario;
  }

  atualizarLista() {
    this.usuarioParaEditar = null;
  }
}
