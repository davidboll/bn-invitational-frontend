import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import ENV from "../shared/config";

import "rxjs/add/operator/map";

@Injectable()
export class AthletesProvider {
  private apiUrl: string = ENV.config("prod").apiUrl;
  private uri: string = `${this.apiUrl}/athletes`;

  constructor(private http: Http) {}

  // GET athletes
  all() {
    return this.http.get(this.uri).map((response: Response) => response.json());
  }

  // GET athletes/id
  show(id: any) {
    return this.http
      .get(`${this.uri}/${id}`)
      .map((response: Response) => response.json());
  }

  // UPDATE result
  update(id, result) {
    let headers = new Headers();
    let body = JSON.stringify({ vote: result });
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.uri}/${id}`, body, options);
  }
}
