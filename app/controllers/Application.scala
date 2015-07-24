package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def showTrip(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def addPoint = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def addAnnotation = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def updateAnnotation(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def getTrip(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def getAnnotations(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def deletePoint(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

}
