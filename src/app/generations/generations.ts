
import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { GenerationsService } from './generations.services';


@Component({
  selector: 'app-generations',
  standalone:true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})

export class Generations implements OnInit {

  generations: any[] = [];

  constructor(private genService: GenerationsService) {}

  ngOnInit(): void {
    this.loadGenerations();
  }

  loadGenerations() {
    this.genService.getGenerations().subscribe((data: any) => {
      this.generations = data.results;
    });
  }


  getGenId(url: string): string {
    return url.split('/').filter(Boolean).pop() ?? '';
  }
}

  


  


 

