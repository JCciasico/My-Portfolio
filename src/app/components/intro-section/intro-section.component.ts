import { Component, OnDestroy, OnInit } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './intro-section.component.html',
  styleUrl: './intro-section.component.css'
})
export class IntroSectionComponent implements OnInit, OnDestroy {
  private readonly fullText = "// hi, I'm John Carlo Ciasico";
  displayedText = '';
  private typingTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      this.displayedText = this.fullText;
      return;
    }
    this.typeNextChar(0);
  }

  private typeNextChar(index: number): void {
    this.displayedText = this.fullText.slice(0, index);
    if (index <= this.fullText.length) {
      this.typingTimer = setTimeout(() => this.typeNextChar(index + 1), 45);
    }
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }
}
