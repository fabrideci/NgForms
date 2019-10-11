import { Injectable } from "@angular/core";
import { UserSettings } from "./user-settings";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"
      })
    };
    return this.http.post(
      "https://putsreq.com/6dSBO8efvKdt7hNP0aPu",
      userSettings,
      httpOptions
    );
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(["Monthly", "Annual", "Lifetime"]);
  }

  //return of(userSettings);
}
