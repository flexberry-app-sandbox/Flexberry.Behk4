docker build --no-cache -f SQL\Dockerfile.PostgreSql -t behk4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t behk4/app ../..
