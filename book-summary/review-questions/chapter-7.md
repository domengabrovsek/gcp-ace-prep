# Chapter 7: Computing with Kubernetes

1. A new engineer is asking for clarification about when it is best to use Kubernetes and when to use instance groups. You point out that Kubernetes uses instance groups. What purpose do instance groups play in a Kubernetes cluster? 
	1. They monitor the health of instances. 
	2. They create pods and deployments. 
	3. They create sets of VMs that can be managed as a unit. 
	4. They create alerts and notification channels. 
2. What kinds of instances are required to have a Kubernetes cluster? 
	1. A cluster master and nodes to execute workloads.
	2. A cluster master, nodes to execute workloads, and Stackdriver nodes to monitor node health. 
	3. Kubernetes nodes; all instances are the same. 
	4. Instances with at least four vCPUs. 
3. What is a pod in Kubernetes? 
	1. A set of containers 
	2. Application code deployed in a Kubernetes cluster 
	3. A single instance of a running process in a cluster 
	4. A controller that manages communication between clients and Kubernetes services 
4. You have developed an application that calls a service running in a Kubernetes cluster. The service runs in pods that can be terminated if they are unhealthy and replaced with other pods that might have a different IP address. How should you code your application to ensure it functions properly in this situation? 
	1. Query Kubernetes for a list of IP addresses of pods running the service you use. 
	2. Communicate with Kubernetes services so applications do not have to be coupled to 
	   specific pods. 
	3. Query Kubernetes for a list of pods running the service you use. 
	4. Use a gcloud command to get the IP addresses needed. 
5. You have noticed that an application’s performance has degraded significantly. You have recently made some configuration changes to resources in your Kubernetes cluster and suspect that those changes have alerted the number of pods running in the cluster. Where would you look for details on the number of pods that should be running? 
	1. Deployments 
	2. Stackdriver 
	3. ReplicaSet
	4. Jobs 
6. You are deploying a high availability application in Kubernetes Engine. You want to maintain availability even if there is a major network outage in a data center. What feature of Kubernetes Engine would you employ? 
	1. Multiple instance groups 
	2. Multizone/region cluster
	3. Regional deployments 
	4. Load balancing 
7. You want to write a script to deploy a Kubernetes cluster with GPUs. You have deployed clusters before, but you are not sure about all the required parameters. You need to deploy this script as quickly as possible. What is one way to develop this script quickly? 
	1. Use the GPU template in the Kubernetes Engine cloud console to generate the gcloud command to create the cluster 
	2. Search the Web for a script 
	3. Review the documentation on gcloud parameters for adding GPUs 
	4. Use an existing script and add parameters for attaching GPUs 
8. What gcloud command will create a cluster named ch07-cluster-1 with four nodes? 
	1. gcloud beta container clusters create ch07-cluster-1 --num-nodes=4 
	2. gcloud container beta clusters create ch07-cluster-1 --num-nodes=4 
	3. gcloud container clusters create ch07-cluster-1 --num-nodes=4 
	4. gcloud beta container clusters create ch07-cluster-1 4 
9. When using Create Deployment from Cloud Console, which of the following cannot be 
   specified for a deployment? 
	1. Container image 
	2. Application name 
	3. Time to live (TTL) 
	4. Initial command 
10. Deployment configuration files created in Cloud Console use what type of file format? 
	1. CSV 
	2. YAML 
	3. TSV 
	4. JSON 
11. What command is used to run a Docker image on a cluster? 
	1. gcloud container run 
	2. gcloud beta container run 
	3. kubectl run
	4. kubectl beta run 
12. What command would you use to have 10 replicas of a deployment named 
    ch07-app-deploy? 
	1. kubectl upgrade deployment ch07-app-deploy --replicas=5 
	2. gcloud containers deployment ch07-app-deploy --replicas=5 
	3. kubectl scale deployment ch07-app-deploy --replicas=10 
	4. kubectl scale deployment ch07-app-deploy --pods=5 
13. Stackdriver is used for what operations on Kubernetes clusters? 
	1. Notifications only 
	2. Monitoring and notifications only 
	3. Logging only 
	4. Notifications, monitoring, and logging 
14. Before monitoring a Kubernetes cluster, what must you create with Stackdriver? 
	1. Log 
	2. Workspace 
	3. Pod 
	4. ReplicaSet 
15. What kind of information is provided in the Details page about an instance in Stackdriver? 
	1. CPU usage only 
	2. Network traffic only 
	3. Disk I/O, CPU usage, and network traffic 
	4. CPU usage and disk I/O 
16. When creating an alerting policy, what can be specified? 
	1. Conditions, notifications, and time to live 
	2. Conditions, notifications, and documentation
	3. Conditions only 
	4. Conditions, documentation, and time to live 
17. Your development team needs to be notified if there is a problem with applications running on several Kubernetes clusters. Different team members prefer different notification methods in addition to Stackdriver alerting. What is the most efficient way to send notifications and meet your team’s requests? 
	1. Set up SMS text messaging, Slack, and email notifications on an alert. 
	2. Create a separate alert for each notification channel. 
	3. Create alerts with email notifications and have those notification emails forwarded to other notification systems. 
	4. Use a single third-party notification mechanism. 
18. A new engineer is trying to set up alerts for a Kubernetes cluster. The engineer seems to be creating a large number of alerts and you are concerned this is not the most efficient way and will lead to more maintenance work than required. You explain that a more efficient way is to create alerts and apply them to what? 
	1. One instance only 
	2. An instance or entire group 
	3. A group only 
	4. A pod 
19. You are attempting to execute commands to initiate a deployment on a Kubernetes cluster. The commands are not having any effect. You suspect that a Kubernetes component is not functioning correctly. What component could be the problem? 
	1. The Kubernetes API
	2. A StatefulSet 
	3. Cloud SDK gcloud commands 
	4. ReplicaSet 
20. You have deployed an application to a Kubernetes cluster. You have noticed that several pods are starved for resources for a period of time and the pods are shut down. When resources are available, new instantiations of those pods are created. Clients are still able to connect to pods even though the new pods have different IP addresses from the pods that were terminated. What Kubernetes component makes this possible? 
	1. Services 
	2. ReplicaSet 
	3. Alerts 
	4. StatefulSet 