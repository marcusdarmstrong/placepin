# --- !Ups

create table t_annotation (
  id bigserial,
  pointid bigint,
  data text not null
);

create table t_point (
  id bigserial,
  lat double precision not null,
  lng double precision not null,
  trip_id bigint not null
);

create table t_trip (
  id bigserial,
  name text not null,
  url_name text not null
);

# --- !Downs

drop table t_annotation;
drop table t_point;
drop table t_trip;
