DROP DATABASE movies;

CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  movieId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(30),
  watched boolean,
  showDetails boolean
);

INSERT INTO movies (movieId, title, watched, showDetails)
    VALUES
    (null, 'Mean Girls', false, false),
    (null, 'Hackers', false, false),
    (null, 'The Grey', true, false),
    (null, 'Sunshine', false, false),
    (null, 'Ex Machina', false, false);

SELECT * from movies;

-- [
--       {title: 'Mean Girls', watched: false, show: false},
--       {title: 'Hackers', watched: false, show: false},
--       {title: 'The Grey', watched: false, show: false},
--       {title: 'Sunshine', watched: false, show: false},
--       {title: 'Ex Machina', watched: false, show: false}]




