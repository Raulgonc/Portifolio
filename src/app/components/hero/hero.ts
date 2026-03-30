import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private stars: { x: number; y: number; r: number; speed: number; opacity: number }[] = [];
  private animId = 0;

  ngOnInit() {
    this.initStarfield();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
  }

  private initStarfield() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize(canvas);
    window.addEventListener('resize', () => this.resize(canvas));
    this.spawnStars(canvas);
    this.animate(canvas);
  }

  private resize(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private spawnStars(canvas: HTMLCanvasElement) {
    this.stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.3 + 0.05,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }

  private animate(canvas: HTMLCanvasElement) {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of this.stars) {
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(238, 238, 255, ${s.opacity})`;
      this.ctx.fill();
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    }
    this.animId = requestAnimationFrame(() => this.animate(canvas));
  }
}
