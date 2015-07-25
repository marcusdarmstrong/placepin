package models;

import play.api.libs.json.Json

case class Point (
  id: Long,
  lat: Double,
  lng: Double,
  tripId: Long
)

object Point {
  //JSON read/write
  implicit val pointFormat = Json.format[Point]
}