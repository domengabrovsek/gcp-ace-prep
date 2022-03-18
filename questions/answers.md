# test exam questions

- source: <https://www.examtopics.com/exams/google/associate-cloud-engineer>

1) C. Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the ג€compute.osAdminLoginג€ role to the Google group corresponding to this team.
2) B. 10.0.0.0/8
3) A. Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.
4) C. Create a managed instance group. Set the Autohealing health check to healthy (HTTP)
   - Explanation: <https://cloud.google.com/compute/docs/tutorials/high-availability-autohealing>
5) D. Use kubectl config use-context and kubectl config view to review the output.
6) D. Coldline Storage
7) D. In the Google Cloud Platform Console, create a new billing account and set up a payment method.
8) A. Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.
9) D. Automatic Scaling with min_idle_instances set to 3.
10) A. Use gcloud iam roles copy and specify the production project as the destination project.
11) A. Deployment Manager
12) C. Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.
13) D. Use GCP Marketplace to launch the Jenkins solution.
14) B. gcloud deployment-manager deployments update --config <deployment-config-path>
15) B. Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.
16) B. Create an instance template, and use the template in a managed instance group with autoscaling configured.
17) D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.
18) A. Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days (365 ג€" 90)
19) A. When creating the VM via the web console, specify the service account under the ג€˜Identity and API Accessג€™ section.
20) B. Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance.
21) A. Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts when running the commands to start the Compute Engine instances.
22) D. Execute the Deployment Manager template using the ג€"-preview option in the same project, and observe the state of interdependent resources.
23) D. Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery
24) A. Use gcloud to create the new project, and then deploy your application to the new project.
25) A. Add the auditors group to the "logging.viewer" and "bigQuery.dataViewer" predefined IAM roles.
26) C. Create a service account and add it to the IAM role ג€˜storage.objectCreatorג€™ for that bucket.
27) A. Using the GCP Console, filter the Activity log to view the information.
28) B. Storage Admin
29) A. Create a signed URL with a four-hour expiration and share the URL with the company.
30) B. Deploy the monitoring pod in a DaemonSet object.
31) A. Enable the Cloud Pub/Sub API in the API Library on the GCP Console.
32) C. Configure a single Stackdriver account, and link all projects to the same account.
33) A. Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1.
34) C. Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles.
35) B. Verify that you are Project Billing Manager for the GCP project. Create a new billing account and link the new billing account to the existing project.
36) C. Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm.
37) D. Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region to serve your application.
38) B. Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role
39) B. Enable the Node Auto-Upgrades feature for your GKE cluster.
40) A. Configure an HTTP(S) load balancer.
41) B. Enable parallel composite uploads using gsutil on the file transfer.
42) B. Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret.
43) D. Increase the initial delay of the HTTP health check to 200 seconds.
44) C. Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type.
45) C. On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version.
46) D. Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment.
47) A. Create an instance template for the instances. Set the ג€˜Automatic Restartג€™ to on. Set the ג€˜On-host maintenanceג€™ to Migrate VM instance. Add the instance template to an instance group.
48) C. Set Content-Type metadata to application/pdf on the PDF file objects.
49) D. Stop the VM, increase the memory to 8 GB, and start the VM.
50) A. Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range.
51) A. Create a health check on port 443 and use that when creating the Managed Instance Group.
52) C. 1. Create a dedicated Google group in Cloud Identity. 2. Add each data scientist's user account to the group. 3. Assign the BigQuery jobUser role to the group.