package tables

import scala.slick.driver.PostgresDriver.simple._
import play.api.Play.current

import models.Trip

class Trips(tag: Tag) extends Table[Trip](tag, "t_trip") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def * = (id) <> (Trip.tupled, Trip.unapply)
}
