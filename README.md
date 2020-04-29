How to run docker

step 1:
	Create a directory for our tutorial 
	
	mkdir docker-mysql-nodejs

step 2:
	Build the image with Dockerfile.
	
	 docker build -t mysql_nodejs .

step 3: 
	Run the newly created docker image as container

	docker run  -p 8080:8080 --name mysql_nodejs -e MYSQL_ROOT_PASSWORD=password mysql_nodejs

step 4:
	Execute the container

	docker exec -it mysql_nodejs bash

