# Diagnostic questions

## Module 1: Setting Up a Cloud Solution Environment

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

## Module 3: Deploying and Implementing Cloud Solutions

Q: Cymbal Superstore’s sales department has a medium-sized MySQL database. This database includes user-defined functions and is used internally by the marketing department at Cymbal Superstore HQ. The sales department asks you to migrate the database to Google Cloud in the most timely and economical way. What should you do?
A: Configure a Compute Engine VM with an N2 machine type, install MySQL, and restore your data to the new instance

Q: The backend of Cymbal Superstore’s e-commerce system consists of managed instance groups. You need to update the operating system of the instances in an automated way using minimal resources. What do you do?
A: Create a new instance template, then click Update VMs. Set the update type to PROACTIVE. Click Start.

Q: The development team for the supply chain project is ready to start building their new cloud app using a small Kubernetes cluster for the pilot. The cluster should only be available to team members and does not need to be highly available. The developers also need the ability to change the cluster architecture as they deploy new capabilities. How would you implement this?
A: Implement a private standard zonal cluster in us-central1-a with a default pool and an Ubuntu image.

Q: You need to quickly deploy a containerized web application on Google Cloud. You know the services you want to be exposed. You do not want to manage infrastructure. You only want to pay when requests are being handled and need support for custom packages. What technology meets these needs?
A: Cloud Run

Q: You need to analyze and act on files being added to a Cloud Storage bucket. Your programming team is proficient in Python. The analysis you need to do takes at most 5 minutes. You implement a Cloud Function to accomplish your processing and specify a trigger resource pointing to your bucket. How should you configure the --trigger-event parameter using gcloud?
A: --trigger-event google.storage.object.finalize

Q: You require a Cloud Storage bucket serving users in New York City. There is a need for geo-redundancy. You do not plan on using ACLs. What CLI command do you use?
A: Run a gsutil mb command specifying a dual-region bucket and an option to turn ACL evaluation off.

Q: Cymbal Superstore asks you to implement Cloud SQL as a database backend to their supply chain application. You want to configure automatic failover in case of a zone outage. You decide to use thegcloud sql instances create command set to accomplish this. Which gcloud command line argument is required to configure the stated failover capability as you create the required instances?
A: --availability-type

Q: Cymbal Superstore’s marketing department needs to load some slowly changing data into BigQuery. The data arrives hourly in a Cloud Storage bucket. You want to minimize cost and implement this in the fewest steps. What should you do?
A: Use the BigQuery data transfer service to schedule a transfer between your bucket and BigQuery.

Q: Which Virtual Private Cloud (VPC) network type allows you to fully control IP ranges and the definition of regional subnets?
A: Custom mode network

Q: What action does theterraform apply command perform?
A: Sets up resources requested in the terraform config file.