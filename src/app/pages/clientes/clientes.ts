import { Component, inject } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Contact } from '../../components/contact/contact';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-clientes-page',
  imports: [Navbar, Contact],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss',
})
export class ClientesPage {
  readonly translate = inject(LanguageService);

  readonly services = [
    {
      key: 'landing',
      price: 'R$ 699',
      usdPrice: '~$140',
      delivery: '5–7',
      popular: false,
      isMonthly: false,
      features: ['landing_feature_1', 'landing_feature_2', 'landing_feature_3', 'landing_feature_4'],
    },
    {
      key: 'institutional',
      price: 'R$ 1.799',
      usdPrice: '~$360',
      delivery: '10–15',
      popular: true,
      isMonthly: false,
      features: ['institutional_feature_1', 'institutional_feature_2', 'institutional_feature_3', 'institutional_feature_4'],
    },
    {
      key: 'ecommerce',
      price: 'R$ 2.999',
      usdPrice: '~$600',
      delivery: '15–25',
      popular: false,
      isMonthly: false,
      features: ['ecommerce_feature_1', 'ecommerce_feature_2', 'ecommerce_feature_3', 'ecommerce_feature_4'],
    },
    {
      key: 'redesign',
      price: 'R$ 999',
      usdPrice: '~$200',
      delivery: '7–10',
      popular: false,
      isMonthly: false,
      features: ['redesign_feature_1', 'redesign_feature_2', 'redesign_feature_3', 'redesign_feature_4'],
    },
    {
      key: 'maintenance',
      price: 'R$ 399',
      usdPrice: '~$80',
      delivery: null,
      popular: false,
      isMonthly: true,
      features: ['maintenance_feature_1', 'maintenance_feature_2', 'maintenance_feature_3', 'maintenance_feature_4'],
    },
  ];

  scrollToForm() {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  }
}
