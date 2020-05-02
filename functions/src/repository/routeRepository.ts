import { QuerySnapshot, DocumentReference, DocumentSnapshot, WriteResult } from "@google-cloud/firestore"
import { Route } from "../interfaces/Route"

export interface RouteRepository {
  getRoutes(): Promise<QuerySnapshot>

  getRoute(idRoute: string): Promise<DocumentSnapshot>

  saveNewRoute(route: Route): Promise<DocumentReference>

  updateRoute(route: Route): Promise<WriteResult>

  deleteRoute(idRoute: string): Promise<WriteResult>
}
