
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';


interface generations{
  name:string;
}

@Component({
  selector: 'app-generations',
  standalone:true,
  imports: [RouterOutlet, CommonModule,RouterLink],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})

export class Generations   {


  }

  


  


 

