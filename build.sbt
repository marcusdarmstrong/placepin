name := """placepin-io"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)
//lazy val gulp = "gulp" //"gulp" !

lazy val gulp = taskKey[Unit]("Runs gulp on the current dir")

gulp := { "node_modules/.bin/gulp" ! }
compile <<= (compile in Compile) dependsOn gulp

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  //jdbc,
  cache,
  ws,
  specs2 % Test,
  "com.typesafe.slick" %% "slick" % "3.0.0",
  "com.typesafe.play" %% "play-slick" % "1.0.0",
  "com.typesafe.play" %% "play-slick-evolutions" % "1.0.0",
  "postgresql" % "postgresql" % "9.1-901-1.jdbc4"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"
resolvers += "Typesafe repository mwn" at "http://repo.typesafe.com/typesafe/maven-releases/"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


fork in run := true

