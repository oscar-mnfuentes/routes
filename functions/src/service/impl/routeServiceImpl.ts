import { RouteService } from "../routeService"
import { RouteRepositoryImpl } from "../../repository/impl/routeRepositoryImpl"
import { Route } from "../../interfaces/Route"

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
}
