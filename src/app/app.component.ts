import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavBarComponent,
    IntroSectionComponent,
    AboutMeComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Portfolio-Angular';
}
