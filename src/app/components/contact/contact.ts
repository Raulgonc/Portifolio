import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly translate = inject(LanguageService);

  nome = '';
  email = '';
  mensagem = '';
  enviado = false;

  onSubmit() {
    const destinatario = 'raulgoncalves.oliveira21@gmail.com';
    const assunto = encodeURIComponent(`Contato do Portfólio — ${this.nome}`);
    const corpo = encodeURIComponent(
      `Nome: ${this.nome}\nEmail: ${this.email}\n\n${this.mensagem}`
    );

    window.open(`mailto:${destinatario}?subject=${assunto}&body=${corpo}`);

    this.enviado = true;
    setTimeout(() => {
      this.enviado = false;
      this.nome = '';
      this.email = '';
      this.mensagem = '';
    }, 3000);
  }
}
