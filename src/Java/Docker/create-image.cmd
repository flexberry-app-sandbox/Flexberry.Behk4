docker build --no-cache -f SQL\Dockerfile.PostgreSql -t behk4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t behk4-java/app ../../..
