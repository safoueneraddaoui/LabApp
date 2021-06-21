import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Tools} from '../../models/Tools';
import {MatDialog} from '@angular/material/dialog';
import {ToolsService} from '../../services/tools.service';
import {ConfirmDialogComponent} from '../@root/confirm-dialog/confirm-dialog.component';
import {Article} from '../../models/Article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'source', 'auteur', 'action'];
  dataSource: Tools[];

  constructor(private ES: ToolsService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  fetchDataSource(): void {
    // @ts-ignore
    this.ES.GetAllTools().then(data => this.dataSource = data);
  }

  onRemoveAccount(id: string): void {
    this.ES.RemoveToolsById(id).then(() => this.fetchDataSource());
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '250px',
    });
    dialogRef.afterClosed().pipe().subscribe(
      isDeleteConfirmed => {
        console.log('removing: ', isDeleteConfirmed);
        if (isDeleteConfirmed) {
          this.ES.RemoveToolsById(id).then(() => this.fetchDataSource());
        }
      }
    )
  }

}
