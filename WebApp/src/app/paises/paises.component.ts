import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css'],
  providers: [HttpClient]
})
export class PaisesComponent implements OnInit {

  paises: any;
  filtroBusqueda = '';

  constructor(private apiSerive: ApiService) { }

  ngOnInit(): void {
    
    this.apiSerive.getCountries().subscribe(m => {
      this.paises = m;
      console.log(this.paises);
    })
  }



}
