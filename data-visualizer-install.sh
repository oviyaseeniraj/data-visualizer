curl http://cube.dev/downloads/ecom-dump.sql > ecom-dump.sql
createdb ecom
psql --dbname ecom -f ecom-dump.sql

mkdir file-upload
cd file-upload
npm init << HEREDOC








yes
HEREDOC

npm install csv cors express multer sequelize pg pg-hstore --save
mkdir -p app/models/
mkdir -p app/config/
mkdir -p app/routers/
mkdir -p app/controllers/

cp ../app/models/covid.model.js app/models/covid.model.js
cp ../app/config/multer.config.js app/config/multer.config.js
cp ../app/config/env.js app/config/env.js
cp ../app/config/db.config.js app/config/db.config.js
cp ../app/routers/file.router.js app/routers/file.router.js
cp ../app/controllers/file.controller.js app/controllers/file.controller.js
cp ../server.js server.js

node server.js &

echo "Finished setting up file upload to DB controller"

echo "Now starting deployment of Cube JS Server"

cd ..
npm install -g cubejs-cli
cubejs create react-dashboard -d postgres
cp .env react-dashboard
cp schema/Covid.js react-dashboard/schema/Covid.js
rm react-dashboard/schema/Orders.js
cp dashboard-files/src/pages/FileUploadPage.js react-dashboard/dashboard-app/src/pages/
cp dashboard-files/src/components/Header.js react-dashboard/dashboard-app/src/components/
cp dashboard-files/src/App.js react-dashboard/dashboard-app/src/

cd react-dashboard
npm run dev &

