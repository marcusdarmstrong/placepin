package controllers

import play.api._
import play.api.mvc._

class PointsController extends Controller {

  def addPoint = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def deletePoint(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

}
