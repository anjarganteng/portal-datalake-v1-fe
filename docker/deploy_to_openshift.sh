cd /home/sigma/jenkin/telkomsigma-web-frontend
docker build -f dockerFile . -t telkomsigma-web-frontend
oc login -u admin -p redhat
oc project bmri-jonfis
docker login -u admin -p $(oc whoami -t) docker-registry.default.svc:5000
docker tag telkomsigma-web-frontend docker-registry.default.svc:5000/bmri-jonfis/telkomsigma-web-frontend:latest
docker push docker-registry.default.svc:5000/bmri-jonfis/telkomsigma-web-frontend:latest

