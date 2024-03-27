# Deploying Node.js Application in Kubernetes

This repository contains the necessary files and instructions to deploy a Node.js application in Kubernetes.

## Steps Taken

1. **Create Node.js App**: Developed a Node.js application to be deployed.

2. **Create Dockerfile**: Crafted a Dockerfile to containerize the Node.js application.

3. **Build Image and Push to Docker Hub**: Built a Docker image from the Dockerfile and pushed it to Docker Hub for accessibility.

4. **Create Kubernetes Deployment and Services**: Set up Kubernetes deployment and services to manage the application within the Kubernetes cluster.

5. **Running Kubernetes Cluster**: I did it with minikube but you can also do it with cloud providers.

## Instructions

### 1. Clone Repository
```bash
git clone <repository_url>
cd <repository_directory>
```

### 2. Build Docker Image

```bash
docker build -t <docker_username>/<image_name>:<tag> .
```

### 3. Push Image to Docker Hub
```bash
docker push <docker_username>/<image_name>:<tag>
```

### 4. Set Up Kubernetes Cluster

Ensure you have a Kubernetes cluster set up and configured. If not, follow the documentation to set up a cluster.

### 5. Apply Kubernetes Configuration

Apply the Kubernetes deployment and services configuration files located in this repository to your Kubernetes cluster:
```bash
kubectl apply -f <path_to_deployment_file>
kubectl apply -f <path_to_service_file>
```

### 6. Access the Application
Once the deployment and services are successfully applied, access the application using the defined service.



