import { RoutePointRepository } from "../routePointRepository"
import { QuerySnapshot, FieldPath, DocumentData } from "@google-cloud/firestore"
import { firestore } from "../.."
import { ROUTE_POINT_COLLECTION } from "../../config/constants"

export class RoutePointRepositoryImpl implements RoutePointRepository {
  getPointsByRoute(idRoute: string): Promise<QuerySnapshot> {
    return firestore.collection(ROUTE_POINT_COLLECTION).where("idRoute", "==", idRoute).get()
  }

  getPoint(idRoute: string, idPoint: string): Promise<QuerySnapshot> {
    return firestore
      .collection(ROUTE_POINT_COLLECTION)
      .where(FieldPath.documentId(), "==", idPoint)
      .where("idRoute", "==", idRoute)
      .get()
  }
}
