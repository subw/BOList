import { Component, OnInit } from '@angular/core';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-interactive-list',
  templateUrl: './interactive-list.component.html',
  styleUrls: ['./interactive-list.component.css'],
  providers: []
})
export class InteractiveListComponent implements OnInit {
  activities: Activity[];
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(): void {
    this.activityService.getActivities().subscribe(activities => this.activities = activities);
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
