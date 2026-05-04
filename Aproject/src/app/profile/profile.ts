import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiAuth } from '../services/api-auth';
import { Fogort } from '../fogort/fogort';

@Component({
  selector: 'app-profile',
  imports: [Fogort],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  constructor(private api: ApiAuth, private cdr: ChangeDetectorRef) {}

  profileObj: any = null;

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.api.getProfileInfo(userId).subscribe({
        next: (resp: any) => {
          this.profileObj = resp;
          this.cdr.detectChanges();
        },
        error: () => this.fetchSelf(),
      });
    } else {
      this.fetchSelf();
    }
  }

  fetchSelf() {
    this.api.getProfileInfo2().subscribe({
      next: (resp: any) => {
        this.profileObj = resp;
        this.cdr.detectChanges();
      },
      error: (er) => alert(er.message),
    });
  }
}