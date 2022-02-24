# Chapter 8: Managing Kubernetes Clusters

1. You are running several microservices in a Kubernetes cluster. You’ve noticed some performance degradation. After reviewing some logs, you begin to think the cluster may be improperly configured, and you open Cloud Console to investigate. How do you see the details of a specific cluster? 
	1. Type the cluster name into the search bar. 
	2. Click the cluster name. 
	3. Use the gcloud cluster details command. 
	4. None of the above. 
2. You are viewing the details of a cluster in Cloud Console and want to see how many vCPUs are available in the cluster. Where would you look for that information? 
	1. Node Pools section of the Cluster Details page 
	2. Labels section of the Cluster Details page 
	3. Summary line of the Cluster Listing page 
	4. A and C 
3. You have been assigned to help diagnose performance problems with applications running on several Kubernetes clusters. The first thing you want to do is understand, at a high level, the characteristics of the clusters. Which command should you use? 
	1. gcloud container list 
	2. gcloud container clusters list 
	3. gcloud clusters list 
	4. None of the above 
4. When you first try to use the kubectl command, you get an error message indicating that the resource cannot be found or you cannot connect to the cluster. What command would you use to try to eliminate the error? 
	1. gcloud container clusters access 
	2. gdcloud container clusters get-credentials 
	3. gcloud auth container 
	4. gcloud auth container clusters 
5. An engineer recently joined your team and is not aware of your team’s standards for creating clusters and other Kubernetes objects. In particular, the engineer has not properly labeled several clusters. You want to modify the labels on the cluster from Cloud Console. How would you do it? 
	1. Click the Connect button. 
	2. Click the Deploy menu option. 
	3. Click the Edit menu option. 
	4. Type the new labels in the Labels section. 
6. You receive a page in the middle of the night informing you that several services running on a Kubernetes cluster have high latency when responding to API requests. You review monitoring data and determine that there are not enough resources in the cluster to keep up with the load. You decide to add six more VMs to the cluster. What parameters will you need to specify when you issue the cluster resize command? 
	1. Cluster size 
	2. Cluster name 
	3. Node pool name 
	4. All of the above 
7. You want to modify the number of pods in a cluster. What is the best way to do that? 
	1. Modify pods directly 
	2. Modify deployments 
	3. Modify node pools directly 
	4. Modify nodes 
8. You want to see a list of deployments. Which option from the Kubernetes Engine navigation  menu would you select?  
	1. Clusters 
	2. Storage 
	3. Workloads 
	4. Deployments 
9. What actions are available from the Actions menu when viewing deployment details? 
	1. Scale and Autoscale only 
	2. Autoscale, Expose, and Rolling Update 
	3. Add, Modify, and Delete 
	4. None of the above 
10. What is the command to list deployments from the command line? 
	1. gcloud container clusters list-deployments 
	2. gcloud container clusters list 
	3. kubectl get deployments 
	4. kubectl deployments list 
11. What parameters of a deployment can be set in the Create Deployment page in Cloud Console? 
	1. Container image 
	2. Cluster name 
	3. Application name 
	4. All of the above 
12. Where can you view a list of services when using Cloud Console? 
	1. In the Deployment Details page 
	2. In the Container Details page 
	3. In the Cluster Details page 
	4. None of the above 
13. What kubectl command is used to add a service?
	1. run 
	2. start 
	3. initiate 
	4. deploy 
14. You are supporting machine learning engineers who are testing a series of classifiers. They have five classifiers, called ml-classifier-1, ml-classifier-2, etc. They have found that ml- classifier-3 is not functioning as expected and they would like it removed from the cluster. What would you do to delete a service called ml-classifier-3? 
	1. Run the command kubectl delete service ml-classifier-3. 
	2. Run the command kubectl delete ml-classifier-3. 
	3. Run the command gcloud service delete ml-classifier-3. 
	4. Run the command gcloud container service delete ml-classifier-3. 
15. What service is responsible for managing container images? 
	1. Kubernetes Engine 
	2. Compute Engine 
	3. Container Registry
	4. Container Engine 
16. What command is used to list container images in the command line? 
	1. gcloud container images list
	2. gcloud container list images 
	3. kubectl list container images 
	4. kubectl container list images 
17. A data warehouse designer wants to deploy an extraction, transformation, and load process to Kubernetes. The designer provided you with a list of libraries that should be installed, including drivers for GPUs. You have a number of container images that you think may meet the requirements. How could you get a detailed description of each of those containers? 
	1. Run the command gcloud container images list details. 
	2. Run the command gcloud container images describe. 
	3. Run the command gcloud image describe. 
	4. Run the command gcloud container describe. 
18. You have just created a deployment and want applications outside the cluster to have access to the services provided by the deployment. What do you need to do to the service? 
	1. Give it a public IP address. 
	2. Issue a kubectl expose deployment command.
	3. Issue a gcloud expose deployment command. 
	4. Nothing, making it accessible must be done at the cluster level. 
19. You have deployed an application to a Kubernetes cluster that processes sensor data from a fleet of delivery vehicles. The volume of incoming data depends on the number of vehicles making deliveries. The number of vehicles making deliveries is dependent on the number of customer orders. Customer orders are high during daytime hours, holiday seasons, and when major advertising campaigns are run. You want to make sure you have enough nodes running to handle the load, but you want to keep your costs down. How should you configure your Kubernetes cluster? 
	1. Deploy as many nodes as your budget allows. 
	2. Enable autoscaling. 
	3. Monitor CPU, disk, and network utilization and add nodes as necessary. 
	4. Write a script to run gcloud commands to add and remove nodes when peaks usually start and end, respectively. 
20. When using Kubernetes Engine, which of the following might a cloud engineer need to configure? 
	1. Nodes, pods, services, and clusters only 
	2. Nodes, pods, services, clusters, and container images 
	3. Nodes, pods, clusters, and container images only 
	4. Pods, services, clusters, and container images only 