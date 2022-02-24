# cli cheatsheet - kubernetes

kubectl commands

``` bash
# pods
kubectl get pods
kubectl describe pods

# nodes
kubectl get nodes
kubectl describe nodes

# deployments
kubectl get deployments
kubectl scale deployment [name] --replices 5
kubectl autoscale deployment [name] --max 10 --min 1 --cpu-percent 80
kubectl delete deployment [name]

# services
kubectl get services
kubectl run hello-server --image=gcr.io/google/samples/hello-app:1.0 --port 8080
kubectl expose deployment hello-server --type="LoadBalancer"
kubectl delete service hello-server
```

gcloud commands - managing kubernetes clusters

```bash
# list all the clusters
gcloud container clusters list

# describe a cluster 
gcloud container clusters describe [name]

# configure a kubeconfig to start using kubectl commands on a cluster
gcloud container cluster get-credentials [name]

# update a cluster
gcloud container cluster resize [name] [node pool name] [cluster size] # resize
gcloud container cluster update [name] [flags]

# list all images
gcloud container images list
```
