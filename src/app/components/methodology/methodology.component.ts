import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ModelItem {
  name: string;
  description: string;
}

interface DeliveryModel {
  icon: string;
  title: string;
  color: string;
  models: ModelItem[];
  image: string;
}

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './methodology.component.html',
  styleUrl: './methodology.component.scss'
})
export class MethodologyComponent {

  voiceSteps = [
    { letter: 'V', title: 'Value', description: 'Focus on delivering business value', icon: 'bi-trophy' },
    { letter: 'O', title: 'Optimize', description: 'Optimize testing efforts continuously', icon: 'bi-gear' },
    { letter: 'I', title: 'Integrate', description: 'Integrate quality in all phases', icon: 'bi-puzzle' },
    { letter: 'C', title: 'Collaborate', description: 'Collaborate across all teams', icon: 'bi-people' },
    { letter: 'E', title: 'Enable', description: 'Enable fast feedback loops', icon: 'bi-lightning' }
  ];

  deliveryModels: DeliveryModel[] = [
    {
      icon: 'bi-rocket-takeoff',
      title: 'High Performance IT',
      color: '#28a745',
      models: [
        { name: 'DevOps', description: 'Unifies Dev & Ops with Agile mindset for efficient delivery' },
        { name: 'Scrum', description: 'Iterative approach optimizing transparency and risk control' }
      ],
      image: '/images/high-performance-it.png'
    },
    {
      icon: 'bi-bezier2',
      title: 'Hybrid IT',
      color: '#fd7e14',
      models: [
        { name: 'Demand/Supply', description: 'Combines Waterfall with high-performance frameworks' },
        { name: 'SAFe', description: 'Scales lean & agile practices across multiple teams' }
      ],
      image: '/images/hybrid-it.png'
    },
    {
      icon: 'bi-arrow-down-square',
      title: 'Sequential IT',
      color: '#6c757d',
      models: [
        { name: 'Waterfall', description: 'Successive phases with testing at the end' },
        { name: 'V Model', description: 'Links development stages with corresponding test stages' }
      ],
      image: '/images/sequential-it.png'
    }
  ];
}

