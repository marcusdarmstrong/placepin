package controllers

import play.api._
import play.api.mvc._

class NotesController extends Controller {

  def addNote = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def updateNote(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def getNotes(id: Long) = Action {
    Ok(views.html.index("Your new application is ready."))
  }

}
