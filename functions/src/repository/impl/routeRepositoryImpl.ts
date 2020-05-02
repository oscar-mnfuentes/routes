import { RouteRepository } from "../routeRepository"
import { firestore } from "../.."
import { DocumentReference, CollectionReference, DocumentSnapshot, QuerySnapshot } from "@google-cloud/firestore"
import { Route } from "../../interfaces/Route"
import { ROUTE_COLLECTION } from "../../config/constants"

export class RouteRepositoryImpl implements RouteRepository {
  getRoute(idRoute: string): Promise<DocumentSnapshot> {
    return firestore.collection(ROUTE_COLLECTION).doc(idRoute).get()
  }
  getRoutes(): Promise<QuerySnapshot> {
    return firestore.collection(ROUTE_COLLECTION).get()
  }
  saveNewRoute(route: Route): Promise<DocumentReference> {
    return firestore.collection(ROUTE_COLLECTION).add(route)
  }
  updateRoute(route: Route): Promise<FirebaseFirestore.WriteResult> {
    return firestore.collection(ROUTE_COLLECTION).doc(route.id).update(route)
  }
  deleteRoute(idRoute: string): Promise<FirebaseFirestore.WriteResult> {
    return firestore.collection(ROUTE_COLLECTION).doc(idRoute).delete()
  }
}
