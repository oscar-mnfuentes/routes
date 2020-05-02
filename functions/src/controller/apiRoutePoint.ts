import * as express from "express"
import * as cors from "cors"
import { DocumentReference } from "@google-cloud/firestore"
import { firestore } from ".."
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

apiRoutePoint.get("/route/:idRoute/point/:id", async (request, response) => {
  const idPoint = request.params.id
  const idRoute = request.params.idRoute
  const routePointService = new RoutePointServiceImpl()
  const result = await routePointService.getRoutePoint(idRoute, idPoint)
  response.status(200).send(result)
})

apiRoutePoint.put("/route-point", async (request, response) => {
  const routePoint: RoutePoint = request.body
  const routePointService = new RoutePointServiceImpl()
  const id = await routePointService.saveNewPoint(routePoint)
  response.status(201).send(id)
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
