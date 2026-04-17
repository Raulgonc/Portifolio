import { Component, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, NgxParticlesModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnDestroy {
  readonly translate = inject(LanguageService);

  particlesId = 'hero-particles';

  particlesOptions: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    background: { color: { value: 'transparent' } },
    particles: {
      number: {
        value: 80,
        density: { enable: true, width: 1920, height: 1080 },
      },
      color: {
        value: ['#fb7c1c', '#823902', '#f8aa66', '#b6a494', '#c8924a'],
      },
      opacity: {
        value: { min: 0.08, max: 0.35 },
        animation: {
          enable: true,
          speed: 0.6,
          sync: false,
        },
      },
      size: {
        value: { min: 1.5, max: 5 },
        animation: {
          enable: true,
          speed: 1.5,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 1.2 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: false },
      },
      links: {
        enable: true,
        distance: 160,
        color: '#823902',
        opacity: 0.1,
        width: 0.8,
      },
      shape: { type: 'circle' },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.04,
          opacity: 0.5,
          color: { value: '#fb7c1c' },
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.25 },
        },
      },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

  particlesLoaded(_container: Container): void {}

  ngOnDestroy(): void {}
}
