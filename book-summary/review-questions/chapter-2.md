# Chapter 2: GC - Computing Services

1. You are planning to deploy a SaaS application for customers in North America, Europe, and Asia. To maintain scalability, you will need to distribute workload across servers in multiple regions. Which GCP service would you use to implement the workload distribution? 
	1. Cloud DNS 
	2. Cloud Spanner 
	3. Cloud Load Balancing 
	4. Cloud CDN 
2. You have decided to deploy a set of microservices using containers. You could install and manage Docker on Compute Engine instances, but you’d rather have GCP provide some container management services. Which two GCP services allow you to run containers in a managed service? 
	1. App Engine standard environment and App Engine flexible environment 
	2. Kubernetes Engine and App Engine standard environment 
	3. Kubernetes Engine and App Engine flexible environment 
	4. App Engine standard environment and Cloud Functions 
3. Why would an API developer want to use the Apigee API platform? 
	1. To get the benefits of routing and rate-limiting 
	2. Authentication services 
	3. Version control of code 
	4. A and B 
	5. All of the above 
4. You are deploying an API to the public Internet and are concerned that your service will be subject to DDoS attacks. Which GCP service should you consider to protect your API? 
	1. Cloud Armor
	2. Cloud CDN 
	3. Cloud IAM 
	4. VPCs 
5. You have an application that uses a Pub/Sub message queue to maintain a list of tasks that are to be processed by another application. The application that consumes messages from the Pub/Sub queue removes the message only after completing the task. It takes approximately 10 seconds to complete a task. It is not a problem if two or more VMs perform the same task. What is a cost-effective configuration for processing this workload? 
	1. Use preemptible VMs
	2. Use standard VMs 
	3. Use DataProc 
	4. Use Spanner 
6. Your department is deploying an application that has a database backend. You are concerned about the read load on the database server and want to have data available in memory to reduce the time to respond to queries and to reduce the load on the database server. Which GCP service would you use to keep data in memory? 
	1. Cloud SQL 
	2. Cloud Memorystore 
	3. Cloud Spanner 
	4. Cloud Datastore 
7. The Cloud SDK can be used to configure and manage resources in which of the following services? 
	1. Compute Engine 
	2. Cloud Storage 
	3. Network firewalls 
	4. All of the above 
8. What server configuration is required to use Cloud Functions? 
	1. VM configuration 
	2. Cluster configuration 
	3. Pub/Sub configuration 
	4. None 
9. You have been assigned the task of consolidating log data generated by each instance of an 
   application. Which of the Stackdriver management tools would you use? 
	1. Monitoring
	2. Trace 
	3. Debugger 
	4. Logging
10. Which specialized services are most likely to be used to build a data warehousing platform that requires complex extraction, transformation, and loading operations on batch data as well as processing streaming data? 
	1. Apigee API platform 
	2. Data analytics 
	3. AI and machine learning 
	4. Cloud SDK 
11. Your company has deployed 100,000 Internet of Things (IoT) sensors to collect data on the state of equipment in several factories. Each sensor will collect and send data to a data store every 5 seconds. Sensors will run continuously. Daily reports will produce data on the maximum, minimum, and average value for each metric collected on each sensor. There is no need to support transactions in this application. Which database product would you recommend? 
	1. Cloud Spanner
	2. Cloud Bigtable
	3. Cloud SQL MySQL 
	4. Cloud SQL PostgreSQL 
12. You are the lead developer on a medical application that uses patients’ smartphones to capture biometric data. The app is required to collect data and store it on the smartphone when data cannot be reliably transmitted to the backend application. You want to minimize the amount of development you have to do to keep data synchronized between smartphones and backend data stores. Which data store option should you recommend? 
	1. Cloud Firestore 
	2. Cloud Spanner 
	3. Cloud Datastore 
	4. Cloud SQL 
13. A software engineer comes to you for a recommendation. She has implemented a machine learning algorithm to identify cancerous cells in medical images. The algorithm is computationally intensive, makes many mathematical calculations, requires immediate access to large amounts of data, and cannot be easily distributed over multiple servers. What kind of Compute Engine configuration would you recommend? 
	1. High memory, high CPU 
	2. High memory, high CPU, GPU
	3. Mid-level memory, high CPU 
	4. High CPU, GPU 
14. You are tasked with mapping the authentication and authorization policies of your on-premises applications to GPC’s authentication and authorization mechanisms. The GCP documentation states that an identity must be authenticated in order to grant privileges to that identity. What does the term identity refer to? 
	1. VM ID 
	2. User 
	3. Role 
	4. Set of privileges 
15. A client is developing an application that will need to analyze large volumes of text information. The client is not expert in text mining or working with language. What GCP service would you recommend they use? 
	1. Cloud Vision 
	2. Cloud ML 
	3. Cloud Natural Language Processing 
	4. Cloud Text Miner 
16. Data scientists in your company want to use a machine learning library available only in Apache Spark. They want to minimize the amount of administration and DevOps work. How would you recommend they proceed? 
	1. Use Cloud Spark 
	2. Use Cloud Dataproc 
	3. Use Bigquery 
	4. Install Apache Spark on a cluster of VMs 
17. Database designers at your company are debating the best way to move a database to GCP. The database supports an application with a global user base. Users expect support for transactions and the ability to query data using commonly used query tools. The database designers decide that any database service they choose will 
    need to support ANSI 2011 and global transactions. Which database service would you recommend? 
	1. Cloud SQL 
	2. Cloud Spanner
	3. Cloud Datastore 
	4. Cloud Bigtable 
18. Which specialized service supports both batch and stream processing workflows? 
	1. Cloud Dataproc 
	2. Bigquery 
	3. Cloud Datastore 
	4. AutoML 
19. You have a Python application you’d like to run in a scalable environment with the least 
    amount of management overhead. Which GCP product would you select? 
	1. App Engine flexible environment 
	2. Cloud Engine 
	3. App Engine standard environment
	4. Kubernetes Engine 
20. A product manager at your company reports that customers are complaining about the reliability of one of your applications. The application is crashing periodically, but developers have not found a common pattern that triggers the crashes. They are concerned that they do not have good insight into the behavior of the application and want to perform a detailed review of all crash data. Which Stackdriver tool would you use to view consolidated crash information? 
	1. DataProc 
	2. Monitoring 
	3. Logging 
	4. Error Reporting 