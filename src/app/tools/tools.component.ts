import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Tools} from '../../models/Tools';
import {MatDialog} from '@angular/material/dialog';
import {ToolsService} from '../../services/tools.service';
import {ConfirmDialogComponent} from '../@root/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  [x: string]: any;


  displayedColumns: string[] = ['id', 'date', 'source'];
  // @ts-ignore
  dataSource: MatTableDataSource<Tools>;

  constructor(private TS: ToolsService,
              private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Tools>(this.TS.tab);
  }

  ngOnInit(): void {
  }

  onRemoveAccount(id: string): void {

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '250px',
    });
    dialogRef.afterClosed().pipe().subscribe(
      isDeleteConfirmed => {
        console.log('removing: ', isDeleteConfirmed);
        if (isDeleteConfirmed) {
          this.MS.RemoveToolsById(id).then(() => this.fetchDataSource());
        }
      }
    );
  }

  fetchDataSource(): void {
    this.MS.GetAllTools().then(data => this.dataSource.data = data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

