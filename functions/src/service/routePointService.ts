import { RoutePoint } from "../interfaces/RoutePoint"

export interface RoutePointService {
  getRoutePointsByRoute(idRoute: string): Promise<RoutePoint[]>
  getRoutePoint(idRoute: string, idPoint: string): Promise<RoutePoint>
}
