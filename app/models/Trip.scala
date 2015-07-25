package models;

import play.api.libs.json.Json

case class Trip (
  id: Long,
  name: String,
  urlName: String
)

object Trip {
  //JSON read/write
  implicit val tripFormat = Json.format[Trip]
}