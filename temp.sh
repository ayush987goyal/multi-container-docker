 docker build -t ayush987goyal/multi-client ./client
 docker build -t ayush987goyal/multi-nginx ./nginx
 docker build -t ayush987goyal/multi-server ./server
 docker build -t ayush987goyal/multi-worker ./worker
 docker push ayush987goyal/multi-client
 docker push ayush987goyal/multi-nginx
 docker push ayush987goyal/multi-server
 docker push ayush987goyal/multi-worker
