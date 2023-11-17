import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private servicePromocao: PromocaoService
  ) {}

  ngOnInit(): void {
    this.servicePromocao.listar().subscribe((response) => {
      console.log(response);
    });
  }

  navegarParaBusca(ev: any) {
    this.router.navigate(['busca']);
  }
}
