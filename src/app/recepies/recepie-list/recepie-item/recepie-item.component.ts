import { Component, OnInit, Input} from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie:Recepie;
  id:number;

  constructor(private recepieService:RecepieService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }
  onSelect(){
    this.id=0;
    const recepies:Recepie[] = this.recepieService.getRecepies();
    for(let r of recepies){
      if(r.name === this.recepie.name){
        this.router.navigate([this.id], {relativeTo:this.route});
      }
      this.id++;
    }
  }

}
