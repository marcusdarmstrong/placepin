package tables

import slick.driver.JdbcProfile
import models.Point

trait PointsTable {
  protected val driver: JdbcProfile
  import driver.api._
  class Points(tag: Tag) extends Table[Point](tag, "t_point") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def lat = column[Double]("lat")
    def lng = column[Double]("lng")
    def tripId = column[Long]("trip_id")
    def * = (id, lat, lng, tripId) <> ((Point.apply _).tupled, Point.unapply _)
  }
}