- ./node_modeles/.bin/sequelize init
- ./node_modeles/.bin/sequelize db:create
- ./node_modules/.bin/sequelize migration:create --name create-shops-table
- ./node_modules/.bin/sequelize db:migrate
- ./node_modules/.bin/sequelize db:migrate:undo
- ./node_modules/.bin/sequelize seed:create --name init-shops
- ./node_modules/.bin/sequelize db:seed:all