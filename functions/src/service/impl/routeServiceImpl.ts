import { RouteService } from "../routeService"
import { RouteRepositoryImpl } from "../../repository/impl/routeRepositoryImpl"
import { Route } from "../../interfaces/Route"
import { Timestamp } from "@google-cloud/firestore"

export class RouteServiceImpl implements RouteService {
  routeRepository: RouteRepositoryImpl

  constructor() {
    this.routeRepository = new RouteRepositoryImpl()
  }

  async getRoutes(): Promise<Route[]> {
    const routeSnapshot = await this.routeRepository.getRoutes()
    return routeSnapshot.docs.map((routeDoc) => {
      return <Route>{
        id: routeDoc.id,
        name: routeDoc.data().name,
        description: routeDoc.data().description,
      }
    })
  }

  async getRoute(idRoute: string): Promise<Route> {
    const routeSnapshot = await this.routeRepository.getRoute(idRoute)
    const route : Route = {
      id: routeSnapshot.id,
      name: routeSnapshot.data().name,
      description: routeSnapshot.data().description
    }
    return route
  }

  async saveNewRoute(route: Route): Promise<string> {
    const routeSnapshot = await this.routeRepository.saveNewRoute(route)
    return routeSnapshot.id
  }

  async updateRoute(route: Route): Promise<Timestamp> {
    const routeSnapshot = await this.routeRepository.updateRoute(route)
    return routeSnapshot.writeTime
  }

  async deleteRoute(idRoute: string): Promise<Timestamp> {
    const routeSnapshot = await this.routeRepository.deleteRoute(idRoute)
    return routeSnapshot.writeTime
  }
}
