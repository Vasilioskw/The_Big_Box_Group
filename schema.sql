create table aposts (
    id serial primary key,
    aarea varchar(50) not null,
    abuildingsqft varchar(50) not null,
    alandacerage varchar(50) not null,
    acategory varchar(50) not null,
    anotes varchar(50) not null

);

create table dposts (
    id serial primary key,
    darea varchar(50) not null,
    dbuildingsqft varchar(50) not null,
    dlandacerage varchar(50) not null,
    dcategory varchar(50) not null,
    dnotes varchar(50) not null
);
