package tables

import slick.driver.JdbcProfile
import models.Trip

trait TripsTable {
  protected val driver: JdbcProfile
  import driver.api._
  class Trips(tag: Tag) extends Table[Trip](tag, "t_trip") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def name = column[String]("name")
    def urlName = column[String]("url_name")
    def * = (id, name, urlName) <> ((Trip.apply _).tupled, Trip.unapply _)
  }
}
