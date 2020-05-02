import { RoutePoint } from "../interfaces/RoutePoint"
import { Timestamp } from "@google-cloud/firestore"

export interface RoutePointService {
  getRoutePointsByRoute(idRoute: string): Promise<RoutePoint[]>
  getRoutePoint(idRoute: string, idPoint: string): Promise<RoutePoint>
  saveNewPoint(point: RoutePoint): Promise<string>
  updatePoint(idPoint: string, point: RoutePoint): Promise<Timestamp>
  deletePoint(idRoute: string, idPoint: string): Promise<Timestamp>
}
