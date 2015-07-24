package tables

import scala.slick.driver.PostgresDriver.simple._
import play.api.Play.current

import models.Point

class Points(tag: Tag) extends Table[Point](tag, "t_point") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def lat = column[Double]("lat")
  def lng = column[Double]("lng")
  def tripId = column[Long]("trip_id")
  def * = (id, lat, lng, tripId) <> (Point.tupled, Point.unapply)
}
