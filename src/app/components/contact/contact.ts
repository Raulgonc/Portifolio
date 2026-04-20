import { Component, Input, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_k2bsn7s';
const TPL_MSG     = 'template_volie4q';
const TPL_QUOTE   = 'template_edpk2cq';
const PUBLIC_KEY  = 'VHe7XUJ6mOXSDualB';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  @Input() defaultTab: 'message' | 'quote' = 'message';

  readonly translate = inject(LanguageService);

  activeTab: 'message' | 'quote' = this.defaultTab;

  nome = '';
  email = '';
  telefone = '';
  mensagem = '';

  quoteNome = '';
  quoteEmail = '';
  empresa = '';
  servico = '';
  orcamento = '';
  prazo = '';
  brief = '';

  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

  ngOnInit() {
    emailjs.init(PUBLIC_KEY);
    this.activeTab = this.defaultTab;
  }

  setTab(tab: 'message' | 'quote') {
    this.activeTab = tab;
    this.status = 'idle';
  }

  async onSubmitMessage() {
    this.status = 'sending';
    try {
      await emailjs.send(SERVICE_ID, TPL_MSG, {
        nome:      this.nome,
        email:     this.email,
        telefone:  this.telefone,
        mensagem:  this.mensagem,
      });
      this.status = 'sent';
      setTimeout(() => {
        this.status = 'idle';
        this.nome = '';
        this.email = '';
        this.telefone = '';
        this.mensagem = '';
      }, 3000);
    } catch (err) {
      console.error('EmailJS erro (mensagem):', err);
      this.status = 'error';
    }
  }

  async onSubmitQuote() {
    this.status = 'sending';
    try {
      await emailjs.send(SERVICE_ID, TPL_QUOTE, {
        nome:      this.quoteNome,
        email:     this.quoteEmail,
        empresa:   this.empresa,
        servico:   this.servico,
        orcamento: this.orcamento,
        prazo:     this.prazo,
        brief:     this.brief,
      });
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
    } catch {
      this.status = 'error';
    }
  }
}
