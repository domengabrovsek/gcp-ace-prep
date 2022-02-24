# Chapter 1: Overview of GCP

1. What is the fundamental unit of computing in cloud computing?
1. Physical server
2. VM
3. Block
4. Subnet
2. If you use a cluster that is managed by a cloud provider, which of these will be managed for
   you by the cloud provider?
1. Monitoring
2. Networking
3. Some security management tasks
4. All of the above
3. You need serverless computing for file processing and running the backend of a website; which two products can you choose from Google Cloud Platform?
1. Kubernetes Engine and Compute Engine
2. App Engine and Cloud Functions
3. Cloud Functions and Compute Engine
4. Cloud Functions and Kubernetes Engine
4. You have been asked to design a storage system for a web application that allows users to upload large data files to be analyzed by a business intelligence workflow. The files should be stored in a high-availability storage system. File system functionality is not required. Which storage system in Google Cloud Platform should be used?
1. Block storage
2. Object storage
3. Cache
4. Network File System
5. All block storage systems use what block size?
1. 4KB
2. 8KB
3. 16KB
4. Block size can vary.
6. You have been asked to set up network security in a virtual private cloud. Your company wants to have multiple subnetworks and limit traffic between the subnetworks. Which net- work security control would you use to control the flow of traffic between subnets?
1. Identity access management
2. Router
3. Firewall
4. IP address table
7. When you create a machine learning service to identify text in an image, what type of servers should you choose to manage compute resources?
1. VMs
2. Clusters of VMs
3. No servers; specialized services are serverless
4. VMs running Linux only
8. Investing in servers for extended periods of time, such as committing to use servers for three to five years, works well when?
1. A company is just starting up
2. A company can accurately predict server need for an extended period of time
3. A company has a fixed IT budget
4. A company has a variable IT budget
9. Your company is based in X and will be running a virtual server for Y. What factor determines the unit per minute cost?
1. The time of day the VM is run
2. The characteristics of the server
3. The application you run
4. None of the above
10. You plan to use Cloud Vision to analyze images and extract text seen in the image. You plan to process between 1,000 and 2,500 images per hour. How many VMs should you allocate to meet peak demand?
1. 1
2. 10
3. 25
4. None; Cloud Vision is a serverless service.
11. You have to run a number of services to support an application. Which of the following is a good deployment model?
1. Run on a large, single VM
2. Use containers in a managed cluster
3. Use two large VMs, making one of them read only
4. Use a small VM for all services and increase the size of the VM when CPU utilization
    exceeds 90 percent
12. You have created a VM. Which of the following system administration operations are you allowed to perform on it?
1. Configure the file system
2. Patch operating system software
3. Change file and directory permissions
4. All of the above
13. Cloud Filestore is based on what file system technology?
1. Network File System (NFS)
2. XFS
3. EXT4
4. ReiserFS
14. When setting up a network in GCP, your network the resources in it are treated as what?
1. Virtual private cloud
2. Subdomain
3. Cluster
4. None of the above
15. You need to store data for X and therefore you are using a cache for Y. How will the cache
    affect data retrieval?
1. A cache improves the execution of client-side JavaScript.
2. A cache will continue to store data even if power is lost, improving availability.
3. Caches can get out of sync with the system of truth.
4. Using a cache will reduce latency, since retrieving from a cache is faster than retrieving from SSDs or HDDs.
16. Why can cloud providers offer elastic resource allocation?
1. Cloud providers can take resources from lower-priority customers and give them to
    higher-priority customers.
2. Extensive resources and the ability to quickly shift resources between customers enables public cloud providers to offer elastic resource allocation more efficiently than can be done in smaller data centers.
3. They charge more the more resources you use.
4. They don’t.
17. What is not a characteristic of specialized services in Google Cloud Platform?
1. They are serverless; you do not need to configure servers or clusters.
2. They provide a specific function, such as translating text or analyzing images.
3. They require monitoring by the user.
4. They provide an API to access the functionality of the service.
18. Your client’s transactions must access a drive attached to a VM that allows for random access to parts of files. What kind of storage does the attached drive provide?
1. Object storage
2. Block storage
3. NoSQL storage
4. Only SSD storage
19. You are deploying a new relational database to support a web application. Which type of storage system would you use to store data files of the database?
1. Object storage
2. Data storage
3. Block storage
4. Cache
20. A user prefers services that require minimal setup; why would you recommend Cloud Storage, App Engine, and Cloud Functions?
1. They are charged only by time.
2. They are serverless.
3. They require a user to configure VMs.
4. They can only run applications written in Go.
