- ./node_modeles/.bin/sequelize init
- ./node_modeles/.bin/sequelize db:create
- ./node_modules/.bin/sequelize migration:create --name create-shops-table
- ./node_modules/.bin/sequelize db:migrate
- ./node_modules/.bin/sequelize db:migrate:undo
- ./node_modules/.bin/sequelize seed:create --name init-shops
- ./node_modules/.bin/sequelize db:seed:all
- config
- migrations 数据库迁移 会将mysql 表，字段 创建 修改 叫做迁移 留下记录
- models 业务模型层
  表映射为对象
  Aritcle
  Insert into
  new Aricle({title: ''})
- seeders
  测试数据
- 离开sql 来到工具