import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiSerive: ApiService) { }

  pais: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let code = (params['code']) ? params['code']: 'GTM';

      this.apiSerive.getCountry(code).subscribe(m => {
        this.pais = m;
      })
  });
  }

}
