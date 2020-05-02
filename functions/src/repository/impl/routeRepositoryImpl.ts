import { RouteRepository } from "../routeRepository"
import { firestore } from "../.."
import { DocumentReference, CollectionReference, DocumentSnapshot } from "@google-cloud/firestore"
import { Route } from "../../interfaces/Route"

export class RouteRepositoryImpl implements RouteRepository {
  getRoute(idRoute: string): Promise<DocumentSnapshot> {
    return firestore.collection("routes").doc(idRoute).get()
  }
  getRoutes(): Promise<DocumentReference[]> {
    return firestore.collection("routes").listDocuments()
  }
  saveNewRoute(route: Route): Promise <DocumentReference> {
    return firestore.collection("routes").add(route)
  }
  updateRoute(route: Route): Promise <FirebaseFirestore.WriteResult> {
    return firestore.collection("routes").doc(route.id).update(route)
  }
  deleteRoute(idRoute: string): Promise <FirebaseFirestore.WriteResult> {
    return firestore.collection("routes").doc(idRoute).delete()
  }
}
