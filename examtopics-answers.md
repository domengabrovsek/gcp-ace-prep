# GCP ACE ExamTopics Answers

1) C - Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the "compute.osAdminLogin" role to the Google group corresponding to this team.

reference:
- https://cloud.google.com/compute/docs/instances/connecting-advanced
- https://cloud.google.com/compute/docs/instances/managing-instance-access

2) B - 10.0.0.0/8 

reference:
- https://cloud.google.com/vpc/docs/subnets#valid-ranges

3) A - Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected.

reference:
  - https://cloud.google.com/sql/docs/mysql/backup-recovery/restore

4) C - Create a managed instance group. Set the Autohealing health check to healthy (HTTP)

reference:
- https://cloud.google.com/compute/docs/tutorials/high-availability-autohealing

5) D - Use kubectl config use-context and kubectl config view to review the output

reference:
- https://medium.com/google-cloud/kubernetes-engine-kubectl-config-b6270d2b656c

6) D - Coldline Storage

reference:
  - https://cloud.google.com/storage/docs/storage-classes

7) D - In the Google Cloud Platform Console, create a new billing account and set up a payment method

8) A - Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server.

9) D - Automatic Scaling with min_idle_instances set to 3.

reference:
- https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed

10) A - Use gcloud iam roles copy and specify the production project as the destination project. Most Voted

11) A - Deployment Manager

reference:
- https://cloud.google.com/deployment-manager/docs/fundamentals

12) C - Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file.

reference:
- https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app

13) D - Use GCP Marketplace to launch the Jenkins solution.

reference:
 - https://cloud.google.com/solutions/using-jenkins-for-distributed-builds-on-compute-engine

14) B - gcloud deployment-manager deployments update --config <deployment-config-path>

reference:
- https://cloud.google.com/sdk/gcloud/reference/deployment-manager/deployments/update

15) B - Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator.

reference:
- https://cloud.google.com/bigquery/docs/estimate-costs

16) B - Create an instance template, and use the template in a managed instance group with autoscaling configured

17) D - Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis.

18) B - Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days.

19) A - When creating the VM via the web console, specify the service account under the 'Identity and API Access' section.

reference: 
- https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances


20) B - Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance. Most Voted

reference: 
- https://medium.com/falafel-software/sql-server-in-the-google-cloud-a17e8a1f11ce
