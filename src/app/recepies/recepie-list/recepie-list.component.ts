import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recepie} from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies:Recepie[];
  constructor(private recepieService:RecepieService, private route:ActivatedRoute, private router:Router) { }
  ngOnInit() {
    this.recepies=this.recepieService.getRecepies();
  }

  onAddRecepie(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

}
