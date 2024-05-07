import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { HeaderComponent } from '../header/header.component';
import { BtnCustomComponent } from '../btn-custom/btn-custom.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnCustomComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public benefits = [
    {
      title: 'Equipe capacitada',
      imagePath: '/assets/team.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.',
    },
    {
      title: 'Seus projetos guiados do zero',
      imagePath: '/assets/project-guide.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.',
    },
  ];
}
