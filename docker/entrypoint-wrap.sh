until wget --spider http://telkomsigma-config_config:8888/health; do echo "telkomsigma-config is unavailable to initialize - will retry later"; sleep 5; done; java -jar -Xms512m -Xmx1024m /apps/app.war