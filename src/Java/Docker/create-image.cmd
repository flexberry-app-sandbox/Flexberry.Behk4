docker build --no-cache -f SQL\Dockerfile.PostgreSql -t destkijjsad-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t destkijjsad-java/app ../../..
