package controllers

import play.api._
import play.api.mvc._
import tables.TripsTable
import models.Trip
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import slick.driver.JdbcProfile
import play.api.libs.json.Json.toJson
import play.api.libs.concurrent.Execution.Implicits.defaultContext

class TripsController extends Controller with TripsTable with HasDatabaseConfig[JdbcProfile] {
  val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)

  import driver.api._

  //create an instance of the table
  val Trips = TableQuery[Trips] //see a way to architect your app in the computers-database-slick sample

  def getTrip(id: Long) = Action.async { implicit rs =>
    db.run(Trips.result).map { trips =>
      Ok(toJson(trips))
    }
  }
}
