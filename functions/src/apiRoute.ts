import * as express from "express"
import * as cors from "cors"
import { QuerySnapshot, DocumentReference } from "@google-cloud/firestore"
import { firestore } from "."
import { DocumentSnapshot } from "firebase-functions/lib/providers/firestore"

export const apiRoute = express()
const COLLECTION_ROUTES = "routes"

export interface Route {
  id?: string
  name: string
  description?: string
}

apiRoute.use(cors({ origin: true }))

apiRoute.get("/route", async (request, response) => {
  const result: QuerySnapshot = await firestore
    .collection(COLLECTION_ROUTES)
    .get()
  const routes: Route[] = []
  result.forEach(doc => {
    routes.push({
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description
    })
  })
  response.status(200).send(routes)
})

apiRoute.get("/route/:id", async (request, response) => {
  const routeId = request.params.id
  const result: DocumentSnapshot = await firestore
    .collection(COLLECTION_ROUTES)
    .doc(routeId)
    .get()
  const route: Route = {
    id: result.id,
    name: result.data().name,
    description: result.data().description
  }
  response.status(200).send(route)
})

apiRoute.put("/route", async (request, response) => {
  const route: Route = request.body
  const result: DocumentReference = await firestore
    .collection(COLLECTION_ROUTES)
    .add(route)
  response.status(200).send(result.id)
})

apiRoute.put("/route/:id", async (request, response) => {
  const route: Route = request.body
  const routeId: string = request.params.id
  await firestore
    .collection(COLLECTION_ROUTES)
    .doc(routeId)
    .update(route)
  response.status(200).send(route)
})

apiRoute.delete("/route/:id", async (request, response) => {
  const routeId: string = request.params.id
  await firestore
    .collection(COLLECTION_ROUTES)
    .doc(routeId)
    .delete()
  response.status(200).send(routeId)
})
