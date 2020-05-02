import { RouteRepository } from "../routeRepository"
import { firestore } from "../.."
import { DocumentReference } from "@google-cloud/firestore"

export class RouteRepositoryImpl implements RouteRepository {
  getRoute(): Promise<DocumentReference[]> {
    return firestore.collection("routes").listDocuments()
  }
}
