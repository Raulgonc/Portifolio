import { Component } from '@angular/core';
import { Navbar }     from '../../components/navbar/navbar';
import { Hero }       from '../../components/hero/hero';
import { About }      from '../../components/about/about';
import { Skills }     from '../../components/skills/skills';
import { Projects }   from '../../components/projects/projects';
import { TechStack }  from '../../components/tech-stack/tech-stack';
import { Contact }    from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, Skills, Projects, TechStack, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
