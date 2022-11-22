npx sequelize-cli help

sequelize model:generate --name product --attributes name:string,type:string

npx sequelize db:create --env local

npx sequelize db:migrate --env local

npx sequelize db:migrate:undo --env local
