import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { GenerationsService } from '../generations.services';
import { Generations } from '../generations';

@Component({
  selector: 'app-gen-id',
  standalone:true,
  imports: [CommonModule, RouterOutlet, RouterLink,Generations],
  templateUrl: './gen-id.html',
  styleUrl: './gen-id.css',
})
export class GenId  {

id: string | null = '';
main_region: any;

// api url is reading from generations service
// loads the generations
  constructor(private route: ActivatedRoute,
    private generationservice: GenerationsService) {
    route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

       if (this.id) {
        this.loadGeneration(this.id);
      }
    })

    
  }

  
 //method to get the regions

  loadGeneration(id: string) {
     this.generationservice.GenerationsbyId(id).subscribe(data => {
      console.log(data);
      this.main_region = data.main_region.name;
    });
  }
    }
  

  
  


  
  



