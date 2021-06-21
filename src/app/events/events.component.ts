import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {EventService} from '../../services/event.service';
import {ConfirmDialogComponent} from '../@root/confirm-dialog/confirm-dialog.component';
import {Member} from '../../models/Member';
import {MemberService} from '../../services/member.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  [x: string]: any;

  displayedColumns: string[] = ['id','name', 'start', 'end', 'place', 'action'];
  // @ts-ignore
  dataSource: MatTableDataSource<Event>;

  constructor(
    private ES: EventService,
    private dialog: MatDialog
  ) {
    // @ts-ignore
    this.dataSource = new MatTableDataSource<Member>(this.ES.tab);
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
          this.ES.RemoveEventById(id).then(() => this.fetchDataSource());
        }
      }
    );
  }

  fetchDataSource(): void {
    this.ES.GetAllEvents().then(data => this.dataSource.data = data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
