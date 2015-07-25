package models;

import play.api.libs.json.Json

case class Note (
  id: Long,
  pointId: Long,
  note: String
)

object Note {
  //JSON read/write
  implicit val noteFormat = Json.format[Note]
}