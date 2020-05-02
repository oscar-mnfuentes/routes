import { QuerySnapshot, DocumentData, DocumentReference, WriteResult } from "@google-cloud/firestore"
import { RoutePoint } from "../interfaces/RoutePoint"

export interface RoutePointRepository {
  getPointsByRoute(idRoute: string): Promise<QuerySnapshot>
  getPoint(idRoute: string, idPoint: string): Promise<QuerySnapshot>
  saveNewPoint(point: RoutePoint): Promise<DocumentReference>
  updatePoint(idPoint: string, point: RoutePoint): Promise<WriteResult>
  deletePoint(idPoint: string): Promise<WriteResult>
}
