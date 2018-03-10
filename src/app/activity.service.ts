import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Activity } from './activity';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ActivityService {
    constructor(
        private http: HttpClient) { }

    private activitiesUrl = 'api/activities';  // URL to web api


    getActivities(): Observable<Activity[]> {
        return this.http.get<Activity[]>(this.activitiesUrl)
        .pipe(
            catchError(this.handleError('getActivities', []))
        );
    }

    /** GET activity by id. Will 404 if id not found */
    getActivity(id: number): Observable<Activity> {
        const url = `${this.activitiesUrl}/${id}`;
        return this.http.get<Activity>(url).pipe(
        catchError(this.handleError<Activity>(`getActivity id=${id}`))
        );
    }

    /** PUT: update the activity on the server */
    updateActivity (activity: Activity): Observable<any> {
        return this.http.put(this.activitiesUrl, activity, httpOptions).pipe(
        catchError(this.handleError<any>('updateActivity'))
        );
    }

    /** POST: add a new activity to the server */
    addActivity (activity: Activity): Observable<Activity> {
        return this.http.post<Activity>(this.activitiesUrl, activity, httpOptions).pipe(
        catchError(this.handleError<Activity>('addActivity'))
        );
    }

    /** DELETE: delete the activity from the server */
    deleteActivity (activity: Activity | number): Observable<Activity> {
        const id = typeof activity === 'number' ? activity : activity._id;
        const url = `${this.activitiesUrl}/${id}`;
    
        return this.http.delete<Activity>(url, httpOptions).pipe(
        catchError(this.handleError<Activity>('deleteActivity'))
        );
    }

    /* GET activities whose name contains search term */
    searchActivities(term: string): Observable<Activity[]> {
        if (!term.trim()) {
        // if not search term, return empty activity array.
        return of([]);
        }
        return this.http.get<Activity[]>(`api/activities/?name=${term}`).pipe(
        catchError(this.handleError<Activity[]>('searchActivities', []))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
                
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}