# Chapter 6: Introduction to Computing in GC

1. Which page in Google Cloud Console would you use to create a single instance of a VM? 
	1. Compute Engine
	2. App Engine 
	3. Kubernetes Engine 
	4. Cloud Functions 
2. You view a list of Linux VM instances in the console. All have public IP addresses assigned. You notice that the SSH option is disabled for one of the instances. Why might that be the case? 
	1. The instance is preemptible and therefore does not support SSH. 
	2. The instance is stopped. 
	3. The instance was configured with the No SSH option. 
	4. The SSH option is never disabled. 
3. You have noticed unusually slow response time when issuing commands to a Linux server, and you decide to reboot the machine. Which command would you use in the console to reboot? 
	1. Reboot 
	2. Reset 
	3. Restart 
	4. Shutdown followed by Startup 
4. In the console, you can filter the list of VM instances by which of the following? 
	1. Labels only 
	2. Member of managed instance group only 
	3. Labels, status, or members of managed instance group 
	4. Labels and status only 
5. You will be building a number of machine learning models on an instance and attaching GPU to the instance. When you run your machine learning models they take an unusually long time to run. It appears that GPU is not being used. What could be the cause of this? 
	1. GPU libraries are not installed. 
	2. The operating system is based on Ubuntu. 
	3. You do not have at least eight CPUs in the instance. 
	4. There isn’t enough persistent disk space available. 
6. When you add a GPU to an instance, you must ensure that: 
	1. The instance is set to terminate during maintenance. 
	2. The instance is preemptible. 
	3. The instance does not have nonboot disks attached. 
	4. The instance is running Ubuntu 14.02 or later. 
7. You are using snapshots to save copies of a 100GB disk. You make a snapshot and then add 10GB of data. You create a second snapshot. How much storage is used in total for the two snapshots (assume no compression)? 
	1. 210 GB, with 100GB for the first and 110GB for the second 
	2. 110 GB, with 100GB for the first and 10GB for the second
	3. 110 GB, with 110 for the second (the first snapshot is deleted automatically) 
	4. 221 GB, with 100GB for the first, 110GB for the second, plus 10 percent of the second snapshot (11 GB) for metadata overhead 
8. You have decided to delegate the task of making backup snapshots to a member of your team. What role would you need to grant to your team member to create snapshots? 
	1. Compute Image Admin 
	2. Storage Admin 
	3. Compute Snapshot Admin 
	4. Compute Storage Admin
9. The source of an image may be: 
	1. Only disks 
	2. Snapshots or disks only 
	3. Disks, snapshots, or another image 
	4. Disks, snapshots, or any database export file 
10. You have built images using Ubuntu 14.04 and now want users to start using Ubuntu 16.04. You don’t want to just delete images based on Ubuntu 14.04, but you want users to know they should start using Ubuntu 16.04. What feature of images would you use to accomplish this? 
	1. Redirection 
	2. Deprecated
	3. Unsupported 
	4. Migration 
11. You want to generate a list of VMs in your inventory and have the results in JSON format. What command would you use? 
	1. gcloud compute instances list 
	2. gcloud compute instances describe 
	3. gcloud compute instances list --format json 
	4. gcloud compute instances list --output json 
12. You would like to understand details of how GCP starts a virtual instance. Which optional 
    parameter would you use when starting an instance to display those details? 
	1. --verbose 
	2. --async 
	3. --describe 
	4. --details 
13. Which command will delete an instance named ch06-instance-3? 
	1. gcloud compute instances delete instance=ch06-instance-3 
	2. gcloud compute instance stop ch06-instance-3 
	3. gcloud compute instances delete ch06-instance-3 
	4. gcloud compute delete ch06-instance-3 
14. You are about to delete an instance named ch06-instance-1 but want to keep its boot disk. You do not want to keep other attached disks. What gcloud command would you use
	1. gcloud compute instances delete ch06-instance-1 ––keep-disks=boot 
	2. gcloud compute instances delete ch06-instance-1 ––save-disks=boot 
	3. gcloud compute instances delete ch06-instance-1 ––keep-disks=filesystem 
	4. gcloud compute delete ch06-instance-1 ––keep-disks=filesystem 
15. You want to view a list of fields you can use to sort a list of instances. What command would you use to see the field names? 
	1. gcloud compute instances list 
	2. gcloud compute instances describe
	3. gcloud compute instances list --detailed 
	4. gcloud compute instances describe --detailed 
16. You are deploying an application that will need to scale and be highly available. Which of these Compute Engine components will help achieve scalability and high availability? 
	1. Preemptible instances 
	2. Instance groups
	3. Cloud Storage 
	4. GPUs 
17. Before creating an instance group, you need to create what? 
	1. Instances in the instance group 
	2. Instance group template
	3. Boot disk image 
	4. Source snapshot 
18. How would you delete an instance group template using the command line? 
	1. gcloud compute instances instance-template delete 
	2. glcoud compute instance-templates delete 
	3. gcloud compute delete instance-template 
	4. gcloud compute delete instance-templates 
19. What can be the basis for scaling up an instance group? 
	1. CPU utilization and operating system updates 
	2. Disk usage and CPU utilization only 
	3. Network latency, load balancing capacity, and CPU utilization 
	4. Disk usage and operating system updates only 
20. An architect is moving a legacy application to Google Cloud and wants to minimize the changes to the existing architecture while administering the cluster as a single entity. The legacy application runs on a load-balanced cluster that runs nodes with two different configurations. The two configurations are required because of design decisions made several years ago. The load on the application is fairly consistent, so there is rarely a need to scale up or down. What GCP Compute Engine resource would you recommended using? 
1. Preemptible instances 
2. Unmanaged instance groups
3. Managed instance groups 
4. GPUs 