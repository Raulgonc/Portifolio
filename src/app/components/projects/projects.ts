import { Component, inject, OnInit, signal } from '@angular/core';
import { GithubService, GithubRepo } from '../../services/github';
import { LanguageService } from '../../services/language.service';

const LANG_COLORS: Record<string, string> = {
  TypeScript:  '#3178c6',
  JavaScript:  '#f1e05a',
  HTML:        '#e34c26',
  CSS:         '#563d7c',
  SCSS:        '#c6538c',
  Python:      '#3572A5',
  Java:        '#b07219',
};

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  private github = inject(GithubService);
  readonly translate = inject(LanguageService);

  repos = signal<GithubRepo[]>([]);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.github.getRepos().subscribe({
      next: (data: GithubRepo[]) => {
        this.repos.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  langColor(lang: string | null): string {
    return lang ? (LANG_COLORS[lang] ?? '#6a6a9a') : '#6a6a9a';
  }

  formatDate(iso: string): string {
    const locale = this.translate.lang() === 'pt' ? 'pt-BR' : 'en-US';
    return new Date(iso).toLocaleDateString(locale, { month: 'short', year: 'numeric' });
  }
}
