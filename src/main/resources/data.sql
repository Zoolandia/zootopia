INSERT INTO users (id, username, password) VALUES
  (1, 'jesus', '111111'),
  (2, 'maria', '222222'),
  (3, 'dulce', '333333'),
  (4, 'brian', '444444'),
  (5, 'pablo', '555555'),
  (6, 'david', '666666'),
  (7, 'natalia', '123456'),
  (8, 'txema', '654321'),
  (9, 'sidi', '101010'),
  (10, 'christian', '012345');

INSERT INTO families (id, name, imgurl) VALUES
(1, 'Felidos', '/img/felids.jpeg'),
(2, 'Cánidos', '/img/canids.jpeg'),
(3, 'Reptiles', '/img/reptiles.jpeg'),
(4, 'Mustélidos', '/img/mustelids.jpeg'),
(5, 'Lepóridae', '/img/leporidae.jpeg');

INSERT INTO continents (id, name, imgurl) VALUES
(1, 'África', '/img/countries/africa.png'),
(2, 'Asia', '/img/countries/asia.png'),
(3, 'América del Sur', '/img/countries/samerica.png'),
(4, 'América del Norte', '/img/countries/namerica.png'),
(5, 'Europa', '/img/countries/europe.png'),
(6, 'Australia', '/img/countries/australia.png');

INSERT INTO animals (id, name, type, gender, country_id, date, imgurl, families_id) VALUES
(1, 'Simba', 'León', 'Macho', 1, '2019-03-17', '/img/id1.png', 1),
(2, 'Nala', 'León', 'Hembra', 1, '2022-11-02', '/img/id2.png', 1),
(3, 'Maria', 'Tigre', 'Hembra', 2, '1988-05-02', '/img/id3.png', 1),
(4, 'Giaccoma', 'Pantera', 'Hembra', 3, '2020-08-26', '/img/id4.png', 1),
(5, 'Dexter', 'Jaguar', 'Macho', 4, '2021-02-11', '/img/id5.png', 1),
(6, 'Chester', 'Guepardo', 'Hembra', 1, '2017-07-08', '/img/id6.png', 1),
(7, 'Sisi', 'Leopardo', 'Macho', 1, '2019-12-04', '/img/id7.png', 1),
(8, 'Luna', 'Ocelote', 'Hembra', 3, '2023-04-19', '/img/id8.png', 1),
(9, 'Morty', 'Puma', 'Macho', 4, '2021-09-30', '/img/id9.png', 1),
(10, 'Chelsea', 'Guepardo', 'Hembra', 1, '2020-01-07', '/img/id10.png', 1),
(11, 'Balto', 'Lobo', 'Macho', 5, '2018-06-13', '/img/id11.png', 2),
(12, 'Laika', 'Hiena', 'Hembra', 1, '2022-10-22', '/img/id12.png', 2),
(13, 'Brian', 'Zorro', 'Macho', 5, '1998-10-13', '/img/id13.png', 2),
(14, 'Goofy', 'Chacal', 'Macho', 1, '2021-08-15', '/img/id14.png', 2),
(15, 'Acme', 'Coyote', 'Hembra', 4, '2017-11-25', '/img/id15.png', 2),
(16, 'Albóndiga', 'Licaón', 'Macho', 1, '2020-04-10', '/img/id16.png', 2),
(17, 'Dingo', 'Dingo', 'Hembra', 6, '2018-07-03', '/img/id17.png', 2),
(18, 'Milu', 'Lobo', 'Macho', 5, '1987-11-07', '/img/id18.png', 2),
(19, 'Lassie', 'Zorro', 'Hembra', 5, '2022-05-18', '/img/id19.png', 2),
(20, 'Buck', 'Chacal', 'Macho', 1, '2021-02-01', '/img/id20.png', 2),
(21, 'Cobra', 'Serpiente', 'Hembra', 3, '2018-01-12', '/img/id21.png', 3),
(22, 'Ninja', 'Tortuga', 'Hembra', 3, '2021-06-27', '/img/id22.png', 3),
(23, 'Dundee', 'Cocodrilo', 'Macho', 4, '2017-10-09', '/img/id23.png', 3),
(24, 'Juancho', 'Lagarto', 'Hembra', 5, '2022-03-14', '/img/id24.png', 3),
(25, 'Iguana', 'Iguana', 'Macho', 4, '2019-09-20', '/img/id25.png', 3),
(26, 'Pokémon', 'Gecko', 'Hembra', 1, '2018-12-06', '/img/id26.png', 3),
(27, 'León', 'Camaleón', 'Macho', 1, '2023-07-01', '/img/id27.png', 3),
(28, 'Manolís', 'Anolis', 'Hembra', 4, '2017-04-28', '/img/id28.png', 3),
(29, 'Dientes', 'Víbora', 'Macho', 2, '2020-11-11', '/img/id29.png', 3),
(30, 'Colchón', 'Dragón de Komodo', 'Hembra', 2, '2019-02-14', '/img/id30.png', 3),
(31, 'Estrujala', 'Nutria', 'Hembra', 3, '2021-07-23', '/img/id31.png', 4),
(32, 'Buscón', 'Huron', 'Macho', 5, '2018-09-05', '/img/id32.png', 4),
(33, 'Ladrón', 'Tejón', 'Hembra', 4, '2017-12-30', '/img/id33.png', 4),
(34, 'Wanda', 'Visón', 'Macho', 4, '2022-01-03', '/img/id34.png', 4),
(35, 'Rocket', 'Mapache', 'Macho', 4, '2019-05-26', '/img/id35.png', 4),
(36, 'Tú', 'Comadreja', 'Macho', 5, '2023-10-17', '/img/id36.png', 4),
(37, 'Paraya', 'Nutria', 'Hembra', 4, '2021-03-07', '/img/id37.png', 4),
(38, 'Buscón', 'Huron', 'Macho', 5, '2017-08-19', '/img/id38.png', 4),
(39, 'Len', 'Tejón', 'Hembra', 4, '2020-12-22', '/img/id39.png', 4),
(40, 'Tele', 'Visón', 'Macho', 4, '2019-06-15', '/img/id40.png', 4),
(41, 'Bugs Bunny', 'Conejo', 'Hembra', 5, '2023-02-09', '/img/id41.png', 5),
(42, 'Roger Rabbit', 'Liebre', 'Macho', 5, '2019-06-16', '/img/id42.png', 5),
(43, 'Thumper', 'Conejo', 'Macho', 5, '2017-09-21', '/img/id43.png', 5),
(44, 'Judy Hopps', 'Liebre', 'Hembra', 5, '2022-04-05', '/img/id44.png', 5),
(45, 'Lola Bunny', 'Conejo', 'Macho', 5, '2021-10-29', '/img/id45.png', 5),
(46, 'Peter Rabbit', 'Liebre', 'Hembra', 5, '2018-02-13', '/img/id46.png', 5),
(47, 'Benjamin Bunny', 'Conejo', 'Macho', 5, '2019-11-26', '/img/id47.png', 5),
(48, 'Flopsy Bunny', 'Liebre', 'Hembra', 5, '2020-07-15', '/img/id48.png', 5),
(49, 'Dulce', 'Jervo Orejudo', 'Hembra', 5, '1997-03-10', '/img/id49.png', 5),
(50, 'Jesus Reeves', 'Tardigrado', 'Macho', 5, '1924-09-08', '/img/id50.png', 5);
