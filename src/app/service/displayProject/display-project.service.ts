import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { experienceProj } from "src/app/modal/experience";
import { personalProj } from "src/app/modal/learningProj";

@Injectable({
  providedIn: 'root'
})
export class DisplayProjectService {
  expJson = '../../../assets/mock-json/experience.json';
  learnJson = '../../../assets/mock-json/learningExp.json';
  apiResOne;
  apiResTwo;

  constructor(private _http: HttpClient) { }

  getExperienceProj(): Observable<experienceProj> {
    this.apiResOne = this._http.get(this.expJson);
    return this.apiResOne as Observable<experienceProj>;
  }

  getPersonalProj(): Observable<personalProj> {
    this.apiResTwo = this._http.get(this.learnJson);
    console.log(this.apiResTwo);
    return this.apiResTwo as Observable<personalProj>;
  }
}
