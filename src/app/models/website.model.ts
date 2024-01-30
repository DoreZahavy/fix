
export interface Cmp {
    _id: string
    type: string
    info: { [key: string]: any }
    style: { [key: string]: any }
}

export interface Column {
    _id: string
    cmps: Cmp[]
}

export interface Container {
    _id: string
    columns: Column[]
}

export interface WebsiteRoute {
    urlName: string
    name: string
    containers: Container[]
}

export interface Website {
    _id: string
    name: string
    urlName: string
    userId: string
    defaultRoute: string
    header: Container
    routes: WebsiteRoute[]
    footer: Container

}


