# Chapter 4: Introduction to Computing in GC

1. You are deploying a Python web application to GCP. The application uses only custom code and basic Python libraries. You expect to have sporadic use of the application for the foreseeable future and want to minimize both the cost of running the application and the DevOps overhead of managing the application. Which computing service is the best option for running the application? 
	1. Compute Engine 
	2. App Engine standard environment 
	3. App Engine flexible environment 
	4. Kubernetes Engine 
2. Your manager is concerned about the rate at which the department is spending on cloud services. You suggest that your team use preemptible VMs for all of the following except which one? 
	1. Database server 
	2. Batch processing with no fixed time requirement to complete
	3. High-performance computing cluster 
	4. None of the above 
3. What parameters need to be specified when creating a VM in Compute Engine? 
	1. Project and zone 
	2. Username and admin role 
	3. Billing account 
	4. Cloud Storage bucket 
4. Your company has licensed a third-party software package that runs on Linux. You will run multiple instances of the software in a Docker container. Which of the following GCP services could you use to deploy this software package? 
	1. Compute Engine only 
	2. Kubernetes Engine only 
	3. Compute Engine, Kubernetes Engine, and the App Engine flexible environment only 
	4. Compute Engine, Kubernetes Engine, the App Engine flexible environment, or the App Engine standard environment 
5. You can specify packages to install into a Docker container by including commands in which file? 
	1. Docker.cfg 
	2. Dockerfile 
	3. Config.dck 
	4. install.cfg 
6. How much memory of a node does Kubernetes require as overhead? 
	1. 10GB to 20GB 
	2. 1GB to 2GB 
	3. 1.5GB 
	4. A scaled amount starting at 25 percent of memory and decreasing to 2 percent of marginal memory as the total amount of memory increases. 
7. Your manager is making a presentation to executives in your company advocating that you start using Kubernetes Engine. You suggest that the manager highlight all the features Kubernetes provides to reduce the workload on DevOps engineers. You describe several features, including all of the following except which one? 
	1. Load balancing across Compute Engine VMs that are deployed in a Kubernetes cluster 
	2. Security scanning for vulnerabilities 
	3. Automatic scaling of nodes in the cluster 
	4. Automatic upgrading of cluster software as needed 
8. Your company is about to release a new online service that builds on a new user interface experience driven by a set of services that will run on your servers. There is a separate set of services that manage authentication and authorization. A data store set of services keeps track of account information. All three sets of services must be highly reliable and scale to meet demand. Which of the GCP services is the best option for deploying this? 
	1. App Engine standard environment 
	2. Compute Engine 
	3. Cloud Functions 
	4. Kubernetes Engine
9. A mobile application uploads images for analysis, including identifying objects in the image and extracting text that may be embedded in the image. A third party has created the mobile application, and you have developed the image analysis service. You both agree to use Cloud Storage to store images. You want to keep the two services completely decoupled, but you need a way to invoke the image analysis as soon as an image is uploaded. How should this be done? 
	1. Change the mobile app to start a VM running the image analysis service and have that VM copy the file from storage into local storage on the VM. Have the image service run on the VM. 
	2. Write a function in Python that is invoked by Cloud Functions when a new image file is written to the Cloud Storage bucket that receives new images. The function should submit the URL of the uploaded file to the image analysis service. The image analysis service will then load the image from Cloud Storage, perform analysis, and generate results, which can be saved to Cloud Storage. 
	3. Have a Kubernetes cluster running continuously, with one pod dedicated to listing the contents of the upload bucket and detecting new files in Cloud Storage and another pod dedicated to running the image analysis software. 
	4. Have a Compute Engine VM running and continuously listing the contents of the upload bucket in Cloud Storage to detect new files. Another VM should be continually running the image analysis software. 
10. Your team is developing a new pipeline to analyze a stream of data from sensors on manufacturing devices. The old pipeline occasionally corrupted data because parallel threads overwrote data written by other threads. You decide to use Cloud Functions as part of the pipeline. As a developer of a Cloud Function, what do you have to do to prevent multiple invocations of the function from interfering with each other? 
	1. Include a check in the code to ensure another invocation is not running at the same time. 
	2. Schedule each invocation to run in a separate process. 
	3. Schedule each invocation to run in a separate thread. 
	4. Nothing. GCP ensures that function invocations do not interfere with each other.
11. A client of yours processes personal and health information for hospitals. All health information needs to be protected according to government regulations. Your client wants to move their application to Google Cloud but wants to use the encryption library that they have used in the past. You suggest that all VMs running the application have the encryption library installed. Which kind of image would you use for that? 
	1. Custom image 
	2. Public image 
	3. CentOS 6 or 7 
12. What is the lowest level of the resource hierarchy? 
	1. Folder 
	2. Project
	3. File 
	4. VM instance 
13. Your company is seeing a marked increase in the rate of customer growth in Europe. Latency is becoming an issue because your application is running in us-central1. You suggest deploying your services to a region in Europe. You have several choices. You should consider all of the following factors except which one? 
	1. Cost 
	2. Latency 
	3. Regulations 
	4. Reliability
14. What role gives users full control over Compute Engine instances? 
	1. Compute Manager role 
	2. Compute Admin role
	3. Compute Manager role 
	4. Compute Security Admin 
15. Which of the following are limitations of a preemptible VM? 
	1. Will be terminated within 24 hours. 
	2. May not always be available. Availability may vary across zones and regions. 
	3. Cannot migrate to a regular VM. 
	4. All of the above
16. Custom VMs can have up to how many vCPUs? 
	1. 16 
	2. 32 
	3. 64 
	4. 128 
17. When using the App Engine standard environment, which of the following language’s runtime is not supported? 
	1. Java 
	2. Python 
	3. C 
	4. Go 
18. Kubernetes reserves CPU resources in percentage of cores available. The percentage is what range? 
	1. 1 percent to 10 percent 
	2. 0.25 percent to 6 percent 
	3. 0.25 percent to 2 percent 
	4. 10 percent to 12 percent 
19. Kubernetes deployments can be in what states? 
	1. Progressing, stalled, completed 
	2. Progressing, completed, failed 
	3. Progressing, stalled, failed, completed 
	4. Progressing, stalled, running, failed, completed 
20. A client has brought you in to help reduce their DevOps overhead. Engineers are spending too much time patching servers and optimizing server utilization. They want to move to serverless platforms as much as possible. Your client has heard of Cloud Functions and wants to use them as much as possible. You recommend all of the following types of applications except which one? 
	1. Long-running data warehouse data load procedures
	2. IoT backend processing 
	3. Mobile application event processing 
	4. Asynchronous workflows 