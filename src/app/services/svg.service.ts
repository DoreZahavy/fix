import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  // constructor(private http: HttpClient) {}
  private http = inject(HttpClient)

  getSvg(name: string): Observable<string> {
  
    const svgPath = `assets/svgs/${name}.svg`;
    return this.http.get(svgPath, { responseType: 'text' });
  }
}
