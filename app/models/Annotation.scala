package models;

case class Annotation (
  id: Long,
  pointId: Long,
  dataType: AnnotationType,
  data: String
)