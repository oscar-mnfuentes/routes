import { GeoPoint } from "@google-cloud/firestore"

export interface RoutePoint {
  id?: string
  idRoute: string
  name: string
  description?: string
  picture?: string
  position: GeoPoint
}
