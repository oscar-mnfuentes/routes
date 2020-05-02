import { RouteService } from "../routeService"
import { RouteRepositoryImpl } from "../../repository/impl/routeRepositoryImpl"

export class RouteServiceImpl implements RouteService {
  routeRepository: RouteRepositoryImpl

  constructor() {
    this.routeRepository = new RouteRepositoryImpl()
  }

  getRotues() {
    return this.routeRepository.getRoutes()
  }
}
