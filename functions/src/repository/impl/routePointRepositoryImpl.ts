import { RoutePointRepository } from "../routePointRepository"
import { QuerySnapshot, FieldPath, DocumentReference, WriteResult } from "@google-cloud/firestore"
import { firestore } from "../.."
import { ROUTE_POINT_COLLECTION } from "../../config/constants"
import { RoutePoint } from "../../interfaces/RoutePoint"

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

  saveNewPoint(point: RoutePoint): Promise<DocumentReference> {
    return firestore.collection(ROUTE_POINT_COLLECTION).add(point)
  }

  updatePoint(idPoint: string, point: RoutePoint): Promise<WriteResult> {
    return firestore.collection(ROUTE_POINT_COLLECTION).doc(idPoint).update(point)
  }

  deletePoint(idPoint: string): Promise<WriteResult> {
    return firestore.collection(ROUTE_POINT_COLLECTION).doc(idPoint).delete()
  }
}
