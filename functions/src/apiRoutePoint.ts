import * as express from "express"
import * as cors from "cors"
import {
  QuerySnapshot,
  DocumentReference,
  GeoPoint
} from "@google-cloud/firestore"
import { firestore } from "."
import { DocumentSnapshot } from "firebase-functions/lib/providers/firestore"

export const apiRoutePoint = express()
const COLLECTION_ROUTE_POINTS = "route-points"

export interface RoutePoint {
  id?: string
  name: string
  description?: string
  picture?: string
  position: GeoPoint
}

apiRoutePoint.use(cors({ origin: true }))

apiRoutePoint.get("/route-point", async (request, response) => {
  const result: QuerySnapshot = await firestore
    .collection(COLLECTION_ROUTE_POINTS)
    .get()
  const routePoints: RoutePoint[] = []
  result.forEach(doc => {
    routePoints.push({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      picture: doc.data().picture,
      position: doc.data().position
    })
  })
  response.status(200).send(routePoints)
})

apiRoutePoint.get("/route-point/:id", async (request, response) => {
  const routePointId = request.params.id
  const result: DocumentSnapshot = await firestore
    .collection(COLLECTION_ROUTE_POINTS)
    .doc(routePointId)
    .get()
  const routePoint: RoutePoint = {
    id: result.id,
    name: result.data().name,
    description: result.data().description,
    picture: result.data().picture,
    position: result.data().position
  }
  response.status(200).send(routePoint)
})

apiRoutePoint.put("/route-point", async (request, response) => {
  const routePoint: RoutePoint = request.body
  const result: DocumentReference = await firestore
    .collection(COLLECTION_ROUTE_POINTS)
    .add(routePoint)
  response.status(200).send(result.id)
})

apiRoutePoint.put("/route-point/:id", async (request, response) => {
  const routePoint: RoutePoint = request.body
  const routePointId: string = request.params.id
  await firestore
    .collection(COLLECTION_ROUTE_POINTS)
    .doc(routePointId)
    .update(routePoint)
  response.status(200).send(routePoint)
})

apiRoutePoint.delete("/route-point/:id", async (request, response) => {
  const routePointId: string = request.params.id
  await firestore
    .collection(COLLECTION_ROUTE_POINTS)
    .doc(routePointId)
    .delete()
  response.status(200).send(routePointId)
})
