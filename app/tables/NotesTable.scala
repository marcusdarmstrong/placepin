package tables

import slick.driver.JdbcProfile
import models.Note

trait NotesTable {
  protected val driver: JdbcProfile
  import driver.api._
  class Notes(tag: Tag) extends Table[Note](tag, "t_note") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def pointId = column[Long]("point_id")
    def note = column[String]("note")
    def * = (id, pointId, note) <> ((Note.apply _).tupled, Note.unapply _)
  }
}
