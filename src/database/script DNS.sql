create database Dungeons_n_Sheets;
use Dungeons_n_Sheets;

create table usuarios (
id_player int primary key auto_increment,
nome varchar(100) not null,
email varchar (100) not null,
senha varchar (50) not null,
criado_em datetime default current_timestamp(),
atualisado_em datetime default current_timestamp on update current_timestamp());

insert into usuarios value (0, 'placeholder', 'placeholder', 'placeholder', null, null);

create table personagens (
id_personagem int primary key auto_increment,
fk_player int,
constraint player_dono foreign key personagens(fk_player) references usuarios(id_player),
nome varchar(100) not null,
raca varchar(45) not null,
classe varchar(45) not null,
forc int not null,
des int not null,
cons int not null,
intel int not null,
sab int not null,
car int not null,
criado_em datetime default current_timestamp(),
modificado_em datetime default current_timestamp() on update current_timestamp());
create index lista_jogador on personagens(fk_player);

insert into personagens (id_personagem, fk_player, nome, raca, classe, forc, des, cons, intel, sab, car)
value (0, 1, 'placeholder', 'placeholder', 'placeholder', 0, 0, 0, 0, 0, 0);

create table itens_inventario (
id_item int auto_increment,
fk_personagem int,
foreign key itens_inventario(fk_personagem) references personagens(id_personagem),
primary key(id_item, fk_personagem),
nome varchar(50) not null,
descricao varchar(100),
quantidade int default 1);
create index lista_inventario on itens_inventario(fk_personagem);

create table habilidades (
id_habilidade int auto_increment,
fk_personagem int,
foreign key habilidades(fk_personagem) references personagens(id_personagem),
primary key (id_habilidade, fk_personagem),
nome varchar(50) not null,
descricao varchar(200),
origem varchar(50) not null,
resistencia int,
qnt_dado int,
tp_dado int,
bonus int);
create index lista_habilidades on habilidades(fk_personagem);

CREATE TABLE pericias (
fk_personagem int primary key,
foreign key pericias(fk_personagem) references personagens(id_personagem),
acrobacia tinyint default 0,
lidar_animais tinyint default 0,
arcanismo tinyint default 0,
atletismo tinyint default 0,
atuacao tinyint default 0,
blefar tinyint default 0,
furtividade tinyint default 0,
historia tinyint default 0,
intimidacao tinyint default 0,
intuicao tinyint default 0,
investigacao tinyint default 0,
medicina tinyint default 0,
natureza tinyint default 0,
percepcao tinyint default 0,
persuasao tinyint default 0,
prestidigitacao tinyint default 0,
religiao tinyint default 0,
sobrevivencia tinyint default 0);
create index lista_pericias on pericias(fk_personagem);