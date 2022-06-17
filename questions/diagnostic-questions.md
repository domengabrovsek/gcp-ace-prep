# Diagnostic questions

## Module 1: 

Q: Stella is a new member of a team in your company who has been put in charge of monitoring VM instances in the organization. Stella will need the required permissions to perform this role. How should you grant her those permissions?
A: Add Stella to a Google Group in your organization. Bind that group to roles/compute.viewer.

Q: How are resource hierarchies organized in Google Cloud?
A: Organization, Folder, Project, Resource

Q: What Google Cloud project attributes can be changed?
A: The Project Name.

Q: Jane will manage objects in Cloud Storage for the Cymbal Superstore. She needs to have access to the proper permissions for every project across the organization. What should you do? 
A: Add Jane to a group that has the roles/storage.objectAdmin role assigned at the organizational level.

Q: You need to add new groups of employees in Cymbal Superstore’s production environment. You need to consider Google’s recommendation of using least privilege. What should you do? 
A: Grant predefined and custom roles that provide necessary permissions and grant basic roles only where needed.

Q: The Operations Department at Cymbal Superstore wants to provide managers access to information about VM usage without allowing them to make changes that would affect the state. You assign them the Compute Engine Viewer role. Which two permissions will they receive?
A: compute.images.list, compute.images.get

Q: How are billing accounts applied to projects in Google Cloud? (Pick two)
A: A project and its resources can only be tied to one billing account. A billing account can be linked to one or more projects.

Q: Fiona is the billing administrator for the project associated with Cymbal Superstore’s eCommerce application. Jeffrey, the marketing department lead, wants to receive emails related to budget alerts. Jeffrey should have access to no additional billing information. What should you do?
A: Use Cloud Monitoring notification channels to send Jeffrey an email alert.

Q: Pick two choices, from the options below, that provide a command line interface to Google Cloud.
A: Cloud Shell, Cloud SDK

Q: You want to use the Cloud Shell to copy files to your Cloud Storage bucket. Which Cloud SDK command should you use?
A: gsutil

## Module 2: Planning and Configuring Cloud Solutions

Q: The projected amount of cloud storage required for Cymbal Superstore to enable users to post pictures for project reviews is 10 TB of immediate access storage in the US and 30 TB of storage for historical posts in a bucket located near Cymbal Superstore’s headquarters. The contents of this bucket will need to be accessed once every 30 days. You want to estimate the cost of these storage resources to ensure this is economically feasible. What should you do?
A: Use the pricing calculator to estimate the price for 10 TB of multi-region standard storage, 30 TB for regional Nearline, and egress charges for reads from the bucket.

Q: Cymbal Superstore decides to migrate their supply chain application to Google Cloud. You need to configure specific operating system dependencies. What should you do?
A: Implement an application using virtual machines on Compute Engine.

Q: Cymbal Superstore decides to pilot a cloud application for their point of sale system in their flagship store. You want to focus on code and develop your solution quickly, and you want your code to be portable. How do you proceed?
A: Package your code to a container image and post it to Cloud Run.

Q: An application running on a highly-customized version of Ubuntu needs to be migrated to Google Cloud. You need to do this in the least amount of time with minimal code changes. How should you proceed?
A: Create Compute Engine Virtual Machines and migrate the app to that infrastructure

Q: You want to deploy a microservices application. You need full control of how you manage containers, reliability, and autoscaling, but don’t want or need to manage the control plane. Which compute option should you use?
A: Google Kubernetes Engine

Q: Cymbal Superstore needs to analyze whether they met quarterly sales projections. Analysts assigned to run this query are familiar with SQL. What data solution should they implement?
A: BigQuery

Q: Cymbal Superstore’s supply chain application frequently analyzes large amounts of data to inform business processes and operational dashboards. What storage class would make sense for this use case?
A: Regional

Q: Cymbal Superstore has a need to populate visual dashboards with historical time-based data. This is an analytical use-case. Which TWO storage solutions could they use? 
A: BigQuery, Cloud Bigtable

Q: Cymbal Superstore is piloting an update to its ecommerce app for the flagship store in Minneapolis, Minnesota. The app is implemented as a three-tier web service with traffic originating from the local area and resources dedicated for it in us-central1. You need to configure a secure, low-cost network load-balancing architecture for it. How do you proceed?
A: Configure a standard tier proxied external https load balancer connected to the web tier as a frontend and a regional internal load balancer between the web tier and the backend. 

Q: Which Google Cloud load balancing option runs at Layer 7 of the TCP stack?
A: Global http(s)