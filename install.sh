curl http://cube.dev/downloads/ecom-dump.sql > ecom-dump.sql
createdb ecom
psql --dbname ecom -f ecom-dump.sql

cd file-upload
npm install
node server.js &
echo "Finished setting up file upload to DB controller"

echo "Now starting deployment of Cube JS Server"
cd ../react-dashboard
npm install
node index.js &

cd dashboard-app
npm install
npm run start
# npm run dev &
