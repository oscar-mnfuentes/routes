import { Route } from "../interfaces/Route"
import { Timestamp } from "@google-cloud/firestore";

export interface RouteService {
  getRoutes(): Promise<Route[]>
  getRoute(idRoute: string): Promise <Route>
  saveNewRoute(route: Route): Promise <string>
  updateRoute(route: Route): Promise <Timestamp>
  deleteRoute(idRoute: string): Promise <Timestamp>
  }
