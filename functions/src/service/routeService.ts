import { Route } from "../interfaces/Route"

export interface RouteService {
  getRoutes(): Promise<Route[]>
}
