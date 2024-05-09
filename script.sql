create database likeme;

\c likeme;

create table posts (
    id serial,
    titulo varchar(150),
    img varchar(250),
    descripcion varchar(250),
    likes int
);

\dt 
\d posts;