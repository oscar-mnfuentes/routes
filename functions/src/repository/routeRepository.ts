import { Route } from "../apiRoute"

export interface RouteRepository {
  getRoutes()

  getRoute(idRoute: string)

  saveNewRoute(route: Route)

  updateRoute(route: Route)

  deleteRoute(idRoute: string)
}
