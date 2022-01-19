import { Component, OnInit } from '@angular/core';
import { NasaCuriosityService } from 'src/app/services/nasa-curiosity.service';

interface photo{
  id:number,
  sol:number,
  earth_date:string|number,
  img_src:string
}
@Component({
  selector: 'app-principal-section',
  templateUrl: './principal-section.component.html',
  styleUrls: ['./principal-section.component.scss']
})
export class PrincipalSectionComponent implements OnInit {
  photos: photo[] = []
  constructor( private nasaCuriosity : NasaCuriosityService) { }

  
  ngOnInit(): void {
    this.nasaCuriosity.getPhotos().subscribe(data => {
      this.photos = data.photos
      console.log(data.photos)
    },
    error=> {
      console.log(error)
    }
      
    )
  }

}
