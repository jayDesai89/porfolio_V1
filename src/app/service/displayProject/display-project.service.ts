import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { experienceProj } from "src/app/modal/experience";
import { personalProj } from "src/app/modal/learningProj";

@Injectable({
  providedIn: 'root'
})
export class DisplayProjectService {
  apiRes;

  constructor(private _http: HttpClient) { }

  getExperienceProj(): Observable<experienceProj> {
    this.apiRes = this._http.get("../../json/experience.json");
    return this.apiRes as Observable<experienceProj>;
  }

  getPersonalProj(): Observable<personalProj> {
    this.apiRes = this._http.get("../../json/learningExp.json");
    return this.apiRes as Observable<personalProj>;
  }
}
