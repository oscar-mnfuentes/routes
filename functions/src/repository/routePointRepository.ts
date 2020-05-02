import { QuerySnapshot, DocumentData } from "@google-cloud/firestore"

export interface RoutePointRepository {
  getPointsByRoute(idRoute: string): Promise<QuerySnapshot>
  getPoint(idRoute: string, idPoint: string): Promise<DocumentData>
}
