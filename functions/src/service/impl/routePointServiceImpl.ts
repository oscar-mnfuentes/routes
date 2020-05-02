import { RoutePointService } from "../routePointService"
import { RoutePoint } from "../../interfaces/RoutePoint"
import { RoutePointRepositoryImpl } from "../../repository/impl/routePointRepositoryImpl"
import { Timestamp } from "@google-cloud/firestore"

export class RoutePointServiceImpl implements RoutePointService {
  routePointRepository: RoutePointRepositoryImpl

  constructor() {
    this.routePointRepository = new RoutePointRepositoryImpl()
  }

  async getRoutePointsByRoute(idRoute: string): Promise<RoutePoint[]> {
    const routePointSnapshot = await this.routePointRepository.getPointsByRoute(idRoute)
    return routePointSnapshot.docs.map((doc) => {
      return <RoutePoint>{
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        idRoute: doc.data().idRoute,
        position: doc.data().position,
        picture: doc.data().picture
      }
    })
  }

  async getRoutePoint(idRoute: string, idPoint: string): Promise<RoutePoint> {
    const routePointSnapshot = await this.routePointRepository.getPoint(idRoute, idPoint)
    const routePointDoc = routePointSnapshot.docs[0]
    let result: RoutePoint
    if (routePointDoc) {
      result = {
        id: routePointDoc.id,
        name: routePointDoc.data().name,
        idRoute: routePointDoc.data().idRoute,
        position: routePointDoc.data().position,
        description: routePointDoc.data().description,
        picture: routePointDoc.data().picture
      }
    }
    return result
  }

  async saveNewPoint(point: RoutePoint): Promise<string> {
    const result = await this.routePointRepository.saveNewPoint(point)
    return result.id
  }

  async updatePoint(idPoint: string, point: RoutePoint): Promise<Timestamp> {
    const result = await this.routePointRepository.updatePoint(idPoint, point)
    return result.writeTime
  }

  async deletePoint(idPoint: string): Promise<Timestamp> {
    const result = await this.routePointRepository.deletePoint(idPoint)
    return result.writeTime
  }
}
