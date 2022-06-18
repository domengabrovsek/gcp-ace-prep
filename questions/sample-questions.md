# sample questions

Q: Your organization plans to migrate its financial transaction monitoring application to Google Cloud. Auditors need to view the data and run reports in BigQuery, but they are not allowed to perform transactions in the application. You are leading the migration and want the simplest solution that will require the least amount of maintenance. What should you do?
A: Create a group for auditors, and assign roles/bigquery.dataViewer to them.

Q: You are managing your company’s first Google Cloud project. Project leads, developers, and internal testers will participate in the project, which includes sensitive information. You need to ensure that only specific members of the development team have access to sensitive information. You want to assign the appropriate Identity and Access Management (IAM) roles that also require the least amount of maintenance. What should you do?
A: Create groups. Assign an IAM Predefined role to each group as required, including those who should have access to sensitive data. Assign users to groups.

Q: You are responsible for monitoring all changes in your Cloud Storage and Firestore instances. For each change, you need to invoke an action that will verify the compliance of the change in near real time. You want to accomplish this with minimal setup. What should you do?
A: Use Cloud Function events, and call the security script from the Cloud Function triggers.

Q: Your application needs to process a significant rate of transactions. The rate of transactions exceeds the processing capabilities of a single virtual machine (VM). You want to spread transactions across multiple servers in real time and in the most cost-effective manner. What should you do?
A: Send transactions to Pub/Sub. Process them in VMs in a managed instance group.

Q: Your team needs to directly connect your on-premises resources to several virtual machines inside a virtual private cloud (VPC). You want to provide your team with fast and secure access to the VMs with minimal maintenance and cost. What should you do?
A: Use Cloud VPN to create a bridge between the VPC and your network.

Q: You are implementing Cloud Storage for your organization. You need to follow your organization’s regulations. They include: 1) Archive data older than one year. 2) Delete data older than 5 years. 3) Use standard storage for all other data. You want to implement these guidelines automatically and in the simplest manner available. What should you do?
A: Set up Object Lifecycle management policies.

Q: You are creating a Cloud IOT application requiring data storage of up to 10 petabytes (PB). The application must support high-speed reads and writes of small pieces of data, but your data schema is simple. You want to use the most economical solution for data storage. What should you do?
A: Store the data in Cloud Bigtable, and implement the business logic in the programming language of your choice.

Q: You have created a Kubernetes deployment on Google Kubernetes Engine (GKE) that has a backend service. You also have pods that run the frontend service. You want to ensure that there is no interruption in communication between your frontend and backend service pods if they are moved or restarted. What should you do?
A: Create a service that groups your pods in the backend service, and tell your frontend pods to communicate through that service.

Q: You are responsible for the user-management service for your global company. The service will add, update, delete, and list addresses. Each of these operations is implemented by a Docker container microservice. The processing load can vary from low to very high. You want to deploy the service on Google Cloud for scalability and minimal administration. What should you do?
A: Deploy your Docker containers into Cloud Run.

Q: You provide a service that you need to open to everyone in your partner network.  You have a server and an IP address where the application is located. You do not want to have to change the IP address on your DNS server if your server crashes or is replaced. You also want to avoid downtime and deliver a solution for minimal cost and setup. What should you do?
A: Reserve a static external IP address, and assign it using Cloud DNS.

Q: Your team is building the development, test, and production environments for your project deployment in Google Cloud. You need to efficiently deploy and manage these environments and ensure that they are consistent. You want to follow Google-recommended practices. What should you do?
A: Use the Cloud Foundation Toolkit to create one deployment template that will work for all environments, and deploy with Terraform.

Q: You receive an error message when you try to start a new VM: “You have exhausted the IP range in your subnet.” You want to resolve the error with the least amount of effort.  What should you do?
A: Expand the CIDR range in your subnet, and restart the VM that issued the error.

Q: You are running several related applications on Compute Engine virtual machine (VM) instances. You want to follow Google-recommended practices and expose each application through a DNS name. What should you do?
A: Use Cloud DNS to translate your domain names into your IP addresses.

Q: You are charged with optimizing Google Cloud resource consumption. Specifically, you need to investigate the resource consumption charges and present a summary of your findings. You want to do it in the most efficient way possible. What should you do?
A: Attach labels to resources to reflect the owner and purpose. Export Cloud Billing data into BigQuery, and analyze it with Data Studio.

Q: You are creating an environment for researchers to run ad hoc SQL queries. The researchers work with large quantities of data.  Although they will use the environment for an hour a day on average, the researchers need access to the functional environment at any time during the day. You need to deliver a cost-effective solution. What should you do?
A: Store the data in BigQuery, and run SQL queries in BigQuery.

Q: You are migrating your workload from on-premises deployment to Google Kubernetes Engine (GKE). You want to minimize costs and stay within budget. What should you do?
A: Configure Autopilot in GKE to monitor node utilization and eliminate idle nodes.

Q: Your application allows users to upload pictures. You need to convert each picture to your internal optimized binary format and store it. You want to use the most efficient, cost-effective solution. What should you do?
A: Save uploaded files in a Cloud Storage bucket, and monitor the bucket for uploads. Run a Cloud Function to convert the files and to store them in a Cloud Storage bucket.

Q: You are migrating your on-premises solution to Google Cloud. As a first step, the new cloud solution will need to ingest 100 TB of data. Your daily uploads will be within your current bandwidth limit of 100 Mbps. You want to follow Google-recommended practices for the most cost-effective way to implement the migration. What should you do?
A: Obtain a Transfer Appliance, copy the data to it, and ship it to Google.

Q: You are setting up billing for your project. You want to prevent excessive consumption of resources due to an error or malicious attack and prevent billing spikes or surprises. What should you do?
A: Set up quotas for the resources that your project will be using.

Q: Your project team needs to estimate the spending for your Google Cloud project for the next quarter. You know the project requirements. You want to produce your estimate as quickly as possible. What should you do?
A: Use the Google Cloud Pricing Calculator to enter your predicted consumption for all groups of resources.