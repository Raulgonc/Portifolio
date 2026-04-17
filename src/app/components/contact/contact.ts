import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  @Input() defaultTab: 'message' | 'quote' = 'message';

  readonly translate = inject(LanguageService);

  activeTab: 'message' | 'quote' = this.defaultTab;

  // Message form
  nome = '';
  email = '';
  telefone = '';
  mensagem = '';

  // Quote form
  quoteNome = '';
  quoteEmail = '';
  empresa = '';
  servico = '';
  orcamento = '';
  prazo = '';
  brief = '';

  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  setTab(tab: 'message' | 'quote') {
    this.activeTab = tab;
    this.status = 'idle';
  }

  onSubmitMessage() {
    this.status = 'sending';
    const subject = encodeURIComponent(`Contato RGO Vision — ${this.nome}`);
    const body = encodeURIComponent(
      `Nome: ${this.nome}\nEmail: ${this.email}\nTelefone: ${this.telefone}\n\n${this.mensagem}`
    );
    window.open(`mailto:raulgonc4@gmail.com?subject=${subject}&body=${body}`);
    this.status = 'sent';
    setTimeout(() => {
      this.status = 'idle';
      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.mensagem = '';
    }, 3000);
  }

  onSubmitQuote() {
    this.status = 'sending';
    const subject = encodeURIComponent(`Orçamento RGO Vision — ${this.quoteNome} — ${this.servico}`);
    const body = encodeURIComponent(
      `Nome: ${this.quoteNome}\nEmail: ${this.quoteEmail}\nEmpresa: ${this.empresa}\nServiço: ${this.servico}\nOrçamento aprox.: ${this.orcamento}\nPrazo desejado: ${this.prazo}\n\nDescrição do projeto:\n${this.brief}`
    );
    window.open(`mailto:raulgonc4@gmail.com?subject=${subject}&body=${body}`);
    this.status = 'sent';
    setTimeout(() => {
      this.status = 'idle';
      this.quoteNome = '';
      this.quoteEmail = '';
      this.empresa = '';
      this.servico = '';
      this.orcamento = '';
      this.prazo = '';
      this.brief = '';
    }, 3000);
  }
}
