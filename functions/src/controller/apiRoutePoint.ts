import * as express from "express"
import * as cors from "cors"
import { QuerySnapshot, DocumentReference, GeoPoint } from "@google-cloud/firestore"
import { firestore } from ".."
import { DocumentSnapshot } from "firebase-functions/lib/providers/firestore"
import { RoutePoint } from "../interfaces/RoutePoint"
import { RoutePointServiceImpl } from "../service/impl/routePointServiceImpl"

export const apiRoutePoint = express()
const COLLECTION_ROUTE_POINTS = "route-points"

apiRoutePoint.use(cors({ origin: true }))

apiRoutePoint.get("/route/:idRoute/point", async (request, response) => {
  const idRoute = request.params.idRoute
  const routePointService = new RoutePointServiceImpl()
  const points = await routePointService.getRoutePointsByRoute(idRoute)
  response.status(200).send(points)
})

apiRoutePoint.get("/route-point/:id", async (request, response) => {
  const routePointId = request.params.id
  const result: DocumentSnapshot = await firestore.collection(COLLECTION_ROUTE_POINTS).doc(routePointId).get()
  const routePoint: RoutePoint = {
    id: result.id,
    idRoute: result.data().udRoute,
    name: result.data().name,
    description: result.data().description,
    picture: result.data().picture,
    position: result.data().position
  }
  response.status(200).send(routePoint)
})

apiRoutePoint.put("/route-point", async (request, response) => {
  const routePoint: RoutePoint = request.body
  const result: DocumentReference = await firestore.collection(COLLECTION_ROUTE_POINTS).add(routePoint)
  response.status(200).send(result.id)
})

apiRoutePoint.put("/route-point/:id", async (request, response) => {
  const routePoint: RoutePoint = request.body
  const routePointId: string = request.params.id
  await firestore.collection(COLLECTION_ROUTE_POINTS).doc(routePointId).update(routePoint)
  response.status(200).send(routePoint)
})

apiRoutePoint.delete("/route-point/:id", async (request, response) => {
  const routePointId: string = request.params.id
  await firestore.collection(COLLECTION_ROUTE_POINTS).doc(routePointId).delete()
  response.status(200).send(routePointId)
})
