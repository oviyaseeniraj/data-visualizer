# data-visualizer

Prerequisites:
1. MAC Laptop or Desktop
2. Postgresql running on your computer listening on localhost allowing local communication without password
3. node is installed on your MAC

Setup & Installation
1. mkdir project
2. git clone https://github.com/oviyaseeniraj/data-visualizer.git

Start the servers
cd data-visualizer
sh install.sh

You will see the covid Dashboard on port 3000

Dependent services
Will be automatically started by the install.sh
1. File upload server on port 8080
2. CubeJs on port 4000

Before viewing the charts
1. Edit file-upload/app/config/env.js to ensure the settings are correct for your environment. Change the username to match your setup.
2. Go to http://localhost:3000/#/fileupload and upload the provided covid.csv from the data-visualizer folder
3. Go to http://localhost:3000/#/ and reload/refresh to see your changes
