import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly translate = inject(LanguageService);

  categories = ['Frontend', 'Backend', 'Tools'];

  skills: Skill[] = [
    { name: 'Angular',      level: 85, category: 'Frontend' },
    { name: 'TypeScript',   level: 82, category: 'Frontend' },
    { name: 'HTML & SCSS',  level: 90, category: 'Frontend' },
    { name: 'React',         level: 70, category: 'Frontend' },
    { name: 'Node.js',      level: 75, category: 'Backend'  },
    { name: 'Python',       level: 72, category: 'Backend'  },
    { name: 'SQL',          level: 78, category: 'Backend'  },
    { name: 'REST APIs',    level: 80, category: 'Backend'  },
    { name: 'Git',          level: 85, category: 'Tools'    },
    { name: 'Docker',       level: 60, category: 'Tools'    },
    { name: 'VS Code',      level: 90, category: 'Tools'    },
    { name: 'Figma',        level: 55, category: 'Tools'    },
  ];

  byCategory(cat: string): Skill[] {
    return this.skills.filter(s => s.category === cat);
  }
}
