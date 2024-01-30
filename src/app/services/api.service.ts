import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { from, map, retry } from 'rxjs';
import { storageService } from './async-storage.service';
import { Website } from '../models/website.model';
const WEBSITE_KEY = 'websiteDB'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // http = inject(HttpClient)
  // httpsa = inject(HttpClient)
  constructor() { }

  getWebsites() {
    return from(storageService.query<Website>(WEBSITE_KEY)).pipe(
        // map(websites => this._filterWebsites(websites, filterBy)),
        retry(1)
    )
}

getWebsite(urlName: string){
  return from(storageService.get<Website>(WEBSITE_KEY, urlName)).pipe(retry(1))
}

removeWebsite(websiteId: string) {
    return from(storageService.remove<Website>(WEBSITE_KEY, websiteId)).pipe(retry(1))
}

addWebsite(website: Website) {
    return from(storageService.post<Website>(WEBSITE_KEY, website)).pipe(retry(1))
}

updateWebsite(website: Website) {
    return from(storageService.put<Website>(WEBSITE_KEY, website)).pipe(retry(1))
}

saveWebsite(website: Website) {
    return (website._id ? this.updateWebsite(website) : this.addWebsite(website))
        .pipe(map(savedWebsite => ({ website: savedWebsite, isAdded: !website._id })), retry(1))
}
}
