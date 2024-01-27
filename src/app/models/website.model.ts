
interface Cmp {
    _id: string
    type: string
    info: { [key: string]: any }
    style: { [key: string]: any }
}

interface Column {
    _id: string
    cmps: Cmp[]
}

interface Container {
    _id: string
    columns: Column[]
}

interface WebsiteRoute {
    name: string
    containers: Container[]
}

export interface Website {
    _id: string
    name: string
    userId: string

    header: Container
    routes: WebsiteRoute[]
    footer: Container

}


