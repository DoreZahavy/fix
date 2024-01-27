import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Subject, catchError, concatMap, share, switchMap, take, throwError } from 'rxjs';
import { Website } from '../models/website.model';
import { Errors } from '../models/errors';
import { HttpErrorResponse } from '@angular/common/http';
const WEBSITE_KEY = 'websiteDB'

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  apiService = inject(ApiService)
  router = inject(Router)

  // private _removeWebsite$ = new Subject<string>()
  private _getWebsite$ = new Subject<string>()
  private _saveWebsite$ = new Subject<Website>()

  website = signal<Website | null>(null)

  private errors = signal<Errors>({
    fetch: null,
    save: null,
    remove: null,
  })

  fetchError = computed(() => this.errors().fetch)
  saveError = computed(() => this.errors().save)
  removeError = computed(() => this.errors().remove)


  website$ = this._getWebsite$.pipe(
    switchMap(websiteId => this.apiService.getWebsite(websiteId)),
    catchError(err => this._handleError(err, 'save')),
    share()
  )

  savedWebsite$ = this._saveWebsite$.pipe(
    concatMap(website => this.apiService.saveWebsite(website)),
    catchError(err => this._handleError(err, 'save')),
    share()
  )

  constructor() {
    const websites = JSON.parse(localStorage.getItem(WEBSITE_KEY) || 'null');
    if (!websites || websites.length === 0) {
      localStorage.setItem(WEBSITE_KEY, JSON.stringify(this._createWebsites()))
    }
  }


  public save(website: Website) {
    this._saveWebsite$.next(website)
    return this.savedWebsite$.pipe(take(1))
}

  public getById(websiteId: string) {
    this._getWebsite$.next(websiteId)
    return this.website$.pipe(take(1))
}

  public cleanErrors(errorType?: keyof Errors) {
    this.errors.update(errors => {
      if (errorType) return ({ ...errors, [errorType]: null })
      for (const key in errors) {
        errors[key] = null
      }
      return errors
    })
  }

  private _handleError(err: HttpErrorResponse | string, type?: keyof Errors) {
    console.log({ err, type })
    if (type) this.errors.update(errors => {
      return ({ ...errors, [type]: this._isString(err) ? err : err.message });
    })
    return throwError(() => err)
  }


  private _isString(val: any): val is string {
    return typeof val === 'string' || val instanceof String;
  }


  private _createWebsites() {
    const websites: Website[] = [
    {
      _id: 'asada',
      name: 'new proj title',
      userId: 'doreZ',
      header: {
        _id: 'sdgsdgsd',
        columns: [
          {
            _id: '235235',
            cmps: [
              {
                _id: '1',
                type: 'txt',
                info: {
                  text: 'Sample text'
                },
                style: {
                  fontSize: '16px',
                  color: '#000000'
                }
              },
              {
                _id: '2',
                type: 'image',
                info: {
                  src: 'path/to/image.jpg',
                  alt: 'Sample image'
                },
                style: {
                  width: '100%',
                  height: 'auto'
                }
              }
            ]
          }
        ]
      },
      routes:
        [{
          name: 'about',
          containers: [{
            _id: 'sdgsdgsd',
            columns: [
              {
                _id: '235235',
                cmps: [
                  {
                    _id: '1',
                    type: 'txt',
                    info: {
                      text: 'Sample text'
                    },
                    style: {
                      fontSize: '16px',
                      color: '#000000'
                    }
                  },
                  {
                    _id: '2',
                    type: 'image',
                    info: {
                      src: 'path/to/image.jpg',
                      alt: 'Sample image'
                    },
                    style: {
                      width: '100%',
                      height: 'auto'
                    }
                  }
                ]
              }
            ]
          }
          ]
        },
        {
          name: 'home',
          containers: [
            {
              _id: 'sdgsdgsd',
              columns: [
                {
                  _id: '235235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        text: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: '2',
                      type: 'image',
                      info: {
                        src: 'path/to/image.jpg',
                        alt: 'Sample image'
                      },
                      style: {
                        width: '100%',
                        height: 'auto'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }]
      ,
      footer: {

        _id: 'sdgsdgsd',


        columns: [
          {
            _id: '235235',
            cmps: [
              {
                _id: '1',
                type: 'txt',
                info: {
                  text: 'Sample text'
                },
                style: {
                  fontSize: '16px',
                  color: '#000000'
                }
              },
              {
                _id: '2',
                type: 'image',
                info: {
                  src: 'path/to/image.jpg',
                  alt: 'Sample image'
                },
                style: {
                  width: '100%',
                  height: 'auto'
                }
              }
            ]
          }
        ]


      }
    },
    {
      _id: 'sddfjrfgj',
      name: 'new proj title2',
      userId: 'moishesdsdg',
      header: {
        _id: 'thrth',
        columns: [
          {
            _id: 'erhh',
            cmps: [
              {
                _id: 'dfhd',
                type: 'txt',
                info: {
                  text: 'Sample text'
                },
                style: {
                  fontSize: '16px',
                  color: '#000000'
                }
              },
              {
                _id: '2',
                type: 'image',
                info: {
                  src: 'path/to/image.jpg',
                  alt: 'Sample image'
                },
                style: {
                  width: '100%',
                  height: 'auto'
                }
              }
            ]
          }
        ]
      },
      routes:
        [{
          name: 'about',
          sections: [{
            _id: 'sdgsdgsd',
            columns: [
              {
                _id: '235235',
                cmps: [
                  {
                    _id: '1',
                    type: 'txt',
                    info: {
                      text: 'Sample text'
                    },
                    style: {
                      fontSize: '16px',
                      color: '#000000'
                    }
                  },
                  {
                    _id: '2',
                    type: 'image',
                    info: {
                      src: 'path/to/image.jpg',
                      alt: 'Sample image'
                    },
                    style: {
                      width: '100%',
                      height: 'auto'
                    }
                  }
                ]
              }
            ]
          }
          ]
        },
        {
          name: 'home',
          sections: [
            {
              _id: 'sdgsdgsd',
              columns: [
                {
                  _id: '235235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        text: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: '2',
                      type: 'image',
                      info: {
                        src: 'path/to/image.jpg',
                        alt: 'Sample image'
                      },
                      style: {
                        width: '100%',
                        height: 'auto'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }]
      ,
      footer: {

        _id: 'sdgsdgsd',


        columns: [
          {
            _id: '235235',
            cmps: [
              {
                _id: '1',
                type: 'txt',
                info: {
                  text: 'Sample text'
                },
                style: {
                  fontSize: '16px',
                  color: '#000000'
                }
              },
              {
                _id: '2',
                type: 'image',
                info: {
                  src: 'path/to/image.jpg',
                  alt: 'Sample image'
                },
                style: {
                  width: '100%',
                  height: 'auto'
                }
              }
            ]
          }
        ]


      }
    }
  ]
    return websites
  }

}

