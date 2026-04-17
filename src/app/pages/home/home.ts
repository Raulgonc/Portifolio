import { Component } from '@angular/core';
import { Navbar }  from '../../components/navbar/navbar';
import { Hero }    from '../../components/hero/hero';
import { About }   from '../../components/about/about';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
