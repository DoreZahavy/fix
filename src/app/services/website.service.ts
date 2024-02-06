import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Subject, catchError, concatMap, share, switchMap, take, throwError } from 'rxjs';
import { Website } from '../models/website.model';
import { Errors } from '../models/errors';
import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

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
    switchMap(urlName => this.apiService.getWebsite(urlName)),
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

    this.savedWebsite$.pipe(takeUntilDestroyed())
      .subscribe({
        next: ({ website, isAdded }) => {
          // this.website.update(pets => {
          //     return isAdded
          //         ? [...pets, pet]
          //         : pets.map(p => p._id === pet._id ? pet : p);
          // })
          this.website.set(website)
        },
        error: (err) => {
          console.log({ err })
        }

      })
    this.website$.pipe(takeUntilDestroyed())
      .subscribe({
        next: (website) => {

          this.website.set(website)
        },
        error: (err) => {
          console.log({ err })
        }

      })
  }


  public save(website: Website) {
    this._saveWebsite$.next(website)
    return this.savedWebsite$.pipe(take(1))
  }

  public getByName(urlName: string) {
    console.log("🚀 ~ WebsiteService ~ getByName ~ urlName:", urlName)
    this._getWebsite$.next(urlName)
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
        urlName: 'new-proj-title',
        userId: 'doreZ',
        defaultRoute:'home',
        header: {
          type:'header',
          _id: 'sdgsdgsd',
          columns: [
            {
              _id: '235235',
              cmps: [
                {
                  _id: '1',
                  type: 'txt',
                  info: {
                    txt: 'Sample text'
                  },
                  style: {
                    fontSize: '16px',
                    color: '#000000'
                  }
                },
                {
                  _id: '2',
                  type: 'img',
                  info: {
                    src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
            urlName: 'about',
            containers: [{
              type:'container',
              _id: 'sdgsdgsd',
              columns: [
                {
                  _id: '235235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: '2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
            {
              _id: 'herheh',
              type:'container',
              columns: [
                {
                  _id: '235ehe235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: 'herfdgb2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
            urlName: 'home',
            containers:[{
              _id: 'sdgsdgsd',
              type:'container',
              columns: [
                {
                  _id: '2357jkthe235',
                  cmps: [
                    {
                      _id: '1rdh',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: 'heresgdgb2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
                        alt: 'Sample image'
                      },
                      style: {
                        width: '100%',
                        height: 'auto'
                      }
                    }
                  ]
                },
                {
                  _id: '235sg235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: '2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
            {
              _id: 'hg4eheh',
              type:'container',
              columns: [
                {
                  _id: '235etym235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: 'heh5dgb2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
                        alt: 'Sample image'
                      },
                      style: {
                        width: '100%',
                        height: 'auto'
                      }
                    }
                  ]
                },
                {
                  _id: '235t4235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: 'herferhb2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
                        alt: 'Sample image'
                      },
                      style: {
                        width: '100%',
                        height: 'auto'
                      }
                    }
                  ]
                },
                {
                  _id: '23ntre235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: 'hey54gb2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
          type:'footer',

          columns: [
            {
              _id: '235235',
              cmps: [
                {
                  _id: '1',
                  type: 'txt',
                  info: {
                    txt: 'Sample text'
                  },
                  style: {
                    fontSize: '16px',
                    color: '#000000'
                  }
                },
                {
                  _id: '2',
                  type: 'img',
                  info: {
                    src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
        urlName: 'my-website',
        defaultRoute:'about',
        userId: 'moishesdsdg',
        header: {
          type:'header',
          _id: 'thrth',
          columns: [
            {
              _id: 'erhh',
              cmps: [
                {
                  _id: 'dfhd',
                  type: 'txt',
                  info: {
                    txt: 'Sample text'
                  },
                  style: {
                    fontSize: '16px',
                    color: '#000000'
                  }
                },
                {
                  _id: '2',
                  type: 'img',
                  info: {
                    src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
            urlName: 'about',
            containers: [{
              type:'container',
              _id: 'sdgsdgsd',
              columns: [
                {
                  _id: '235235',
                  cmps: [
                    {
                      _id: '1',
                      type: 'txt',
                      info: {
                        txt: 'Sample text'
                      },
                      style: {
                        fontSize: '16px',
                        color: '#000000'
                      }
                    },
                    {
                      _id: '2',
                      type: 'img',
                      info: {
                        src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
            urlName: 'home',
            containers: [
              {
                _id: 'sdgsdgsd',
                type:'container',
                columns: [
                  {
                    _id: '235235',
                    cmps: [
                      {
                        _id: '1',
                        type: 'txt',
                        info: {
                          txt: 'Sample text'
                        },
                        style: {
                          fontSize: '16px',
                          color: '#000000'
                        }
                      },
                      {
                        _id: '2',
                        type: 'img',
                        info: {
                          src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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
          type:'footer',

          _id: 'sdgsdgsd',


          columns: [
            {
              _id: '235235',
              cmps: [
                {
                  _id: '1',
                  type: 'txt',
                  info: {
                    txt: 'Sample text'
                  },
                  style: {
                    fontSize: '16px',
                    color: '#000000'
                  }
                },
                {
                  _id: '2',
                  type: 'img',
                  info: {
                    src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
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

