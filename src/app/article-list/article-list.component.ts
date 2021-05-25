import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Article} from 'src/models/Article';
import {ArticleService} from 'src/services/article.service';
import { ConfirmDialogComponent } from '../@root/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titre', 'type', 'dateApparition', 'lien', 'sourcePdf', 'auteur', 'action'];
  dataSource: Article[];

  constructor(private AS: ArticleService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchDataSource();
  }

  fetchDataSource(): void {
    this.AS.GetAllarticles().then(data => this.dataSource = data);
  }

  onRemoveAccount(id: string): void {
    this.AS.RemoveArticleById(id).then(() => this.fetchDataSource());
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '250px',
    });
    dialogRef.afterClosed().pipe().subscribe(
      isDeleteConfirmed => {
        console.log('removing: ', isDeleteConfirmed);
        if (isDeleteConfirmed) {
          this.AS.RemoveArticleById(id).then(() => this.fetchDataSource());
        }
      }
    )
  }

}
