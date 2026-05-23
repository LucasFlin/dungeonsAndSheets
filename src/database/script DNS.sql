create database Dungeons_n_Sheets;
use Dungeons_n_Sheets;

create table usuarios (
id_player int primary key auto_increment,
nome varchar(100) not null,
email varchar (100) not null,
senha varchar (256) not null,
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
hp_total int,
hp_atual int,
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
fk_player int,
fk_personagem int,
foreign key pericias(fk_player) references personagens(fk_player),
foreign key pericias(fk_personagem) references personagens(id_personagem),
primary key(fk_player, fk_personagem),
acrobacia tinyint(1) default 0,
lidar_animais tinyint(1) default 0,
arcanismo tinyint(1) default 0,
atletismo tinyint(1) default 0,
atuacao tinyint(1) default 0,
blefar tinyint(1) default 0,
furtividade tinyint(1) default 0,
historia tinyint(1) default 0,
intimidacao tinyint(1) default 0,
intuicao tinyint(1) default 0,
investigacao tinyint(1) default 0,
medicina tinyint(1) default 0,
natureza tinyint(1) default 0,
percepcao tinyint(1) default 0,
persuasao tinyint(1) default 0,
prestidigitacao tinyint(1) default 0,
religiao tinyint(1) default 0,
sobrevivencia tinyint(1) default 0);
create index lista_pericias on pericias(fk_personagem);

create table resultados (
id int auto_increment,
fk_player int,
constraint rolagens_player foreign key (fk_player) references usuarios(id_player),
primary key(id, fk_player),
dado int,
fk_personagem int,
constraint rolagens_personagem foreign key (fk_personagem) references personagens(id_personagem),
data_rolagem datetime default current_timestamp());