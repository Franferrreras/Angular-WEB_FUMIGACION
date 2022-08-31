import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  LIST_USUARIOS: Usuario[] = [
    {usuario: "Fran", nombre: 'Fran', apellido: "Ferreras", sexo: 'H'},
  
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acciones'];
  dataSource = new MatTableDataSource(this.LIST_USUARIOS);
  constructor() { }

  ngOnInit(): void {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
