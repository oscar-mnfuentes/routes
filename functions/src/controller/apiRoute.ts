import * as express from "express"
import * as cors from "cors"
import { DocumentReference } from "@google-cloud/firestore"
import { firestore } from ".."
import { DocumentSnapshot } from "firebase-functions/lib/providers/firestore"
import { Route } from "../interfaces/Route"
import { RouteServiceImpl } from "../service/impl/routeServiceImpl"

export const apiRoute = express()

apiRoute.use(cors({ origin: true }))

apiRoute.get("/route", async (request, response) => {
  const routeService = new RouteServiceImpl()
  const routes = await routeService.getRoutes()
  response.status(202).send(routes)
})

apiRoute.get("/route/:id", async (request, response) => {
  const routeId = request.params.id
  const routeService = new RouteServiceImpl()
  const route = await routeService.getRoute(routeId)
  response.status(202).send(route)
})

apiRoute.put("/route", async (request, response) => {
  const route: Route = request.body
  const routeService = new RouteServiceImpl()
  const newRouteId = await routeService.saveNewRoute(route)
  response.status(201).send(newRouteId)
})

apiRoute.put("/route/:id", async (request, response) => {
  const route: Route = request.body
  const routeId: string = request.params.id
  route.id = routeId
  const routeService = new RouteServiceImpl()
  const routeUpdateTs = await routeService.updateRoute(route)
  response.status(200).send(routeUpdateTs)
})

apiRoute.delete("/route/:id", async (request, response) => {
  const routeId: string = request.params.id
  const routeService = new RouteServiceImpl()
  const routeDeletedTs = await routeService.deleteRoute(routeId)
  response.status(200).send(routeDeletedTs)
})
