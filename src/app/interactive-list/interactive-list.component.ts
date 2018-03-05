import { Component, OnInit } from '@angular/core';

import { Activity } from '../activity';
import { User } from '../user';
import { ActivityService } from '../activity.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-interactive-list',
  templateUrl: './interactive-list.component.html',
  styleUrls: ['./interactive-list.component.less'],
  providers: []
})
export class InteractiveListComponent implements OnInit {
  activities: Activity[];
  users: User[];
  constructor(private activityService: ActivityService, private dataService: DataService) { }

  ngOnInit() {
    this.getActivities();
    this.getUsers();
  }

  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => this.activities = activities);
  }

  getUsers(): void {
    this.dataService.getUsers().subscribe(data => this.users = data['data']);
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.activityService.addActivity({ name } as Activity)
      .subscribe(activity => {
        this.activities.push(activity);
      });
  }

  delete(activity: Activity): void {
    this.activities = this.activities.filter(h => h !== activity);
    this.activityService.deleteActivity(activity).subscribe();
  }
}
