# gcp-ace-prep

Resources I've used for preparation for Google Cloud Platform -  Associate Cloud Engineer certification.

## Resources

### Study areas

- Planning and Configuring Cloud Solutions
  - Planning and estimating using the Pricing Calculator
  - Planning and configuring compute resources
  - Planning and configuring data storage options
  - Planning and configuring network resources
- Deploying and Implementing Cloud Solutions
  - Deploying and implementing Compute Engine resources
  - Deploying and implementing Google Kubernetes Engine resources
  - Deploying and implementing Cloud Run and Cloud Functions resources
  - Deploying and implementing data solutions
  - Deploying and implementing networking resources
  - Deploying a solution using Cloud Marketplace
  - Implementing resources via infrastructure as code
- Ensuring Successful Operation of a Cloud Solution
  - Managing Compute Engine resources
  - Managing Google Kubernetes Engine resources
  - Managing Cloud Run resources
  - Managing storage and database solutions
  - Managing networking resources Monitoring and logging
- Configuring Access and Security
  - Managing IAM
  - Managing service accounts
  - Viewing audit logs

### Learning path - Coursera

- [Preparing for Google Cloud Certification: Cloud Engineer](https://www.coursera.org/professional-certificates/cloud-engineering-gcp)
  - [Google Cloud Fundamentals: Core Infrastructure](https://www.coursera.org/learn/gcp-fundamentals?specialization=cloud-engineering-gcp)
  - [Essential Google Cloud Infrastructure: Foundation](https://www.coursera.org/learn/gcp-infrastructure-foundation?specialization=cloud-engineering-gcp)
  - [Essential Google Cloud Infrastructure: Core Services](https://www.coursera.org/learn/gcp-infrastructure-core-services?specialization=cloud-engineering-gcp) 
  - [Elastic Google Cloud Infrastructure: Scaling and Automation](https://www.coursera.org/learn/gcp-infrastructure-scaling-automation?specialization=cloud-engineering-gcp)
  - [Architecting with Google Kubernetes Engine: Foundations](https://www.coursera.org/learn/foundations-google-kubernetes-engine-gke?specialization=cloud-engineering-gcp)
  - [Preparing for Your Associate Cloud Engineer Journey](https://www.coursera.org/learn/preparing-cloud-associate-cloud-engineer-exam?specialization=cloud-engineering-gcp)

### CloudSkillBoost Quests

- [Create and Manage Cloud Resources](<https://www.qwiklabs.com/quests/120> )
- [Set Up and Configure a Cloud Environment in Google Cloud](<https://www.qwiklabs.com/quests/119>)
- [Perform Foundational Infrastructure Tasks in Google Cloud](<https://www.qwiklabs.com/quests/118>)

### Notes

- [General](./notes/general.md)
- [Cloud Storage](./notes/cloud-storage.md)
- [Compute Engine](./notes/compute-engine.md)
- [IAM](./notes/iam.md)

### Sample Questions

- [Course Diagnostic Questions](./questions/diagnostic-questions.md)
- [Google Sample Questions](./questions/sample-questions.md)
- [Examtopics Questions](./questions/questions.md)
- [Examtopics Answers](./questions/answers.md)

### Relevant Official Documentation

- [IAM](<https://cloud.google.com/iam/docs/overview>)
  - [Resources hierarchy](<https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy#resource-hierarchy-detail>)
  - [Projects](<https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy#projects>)
  - [Understanding Roles](<https://cloud.google.com/iam/docs/understanding-roles>)
  - [Understanding Custom Roles](<https://cloud.google.com/iam/docs/understanding-custom-roles>)
  - [Role types](<https://cloud.google.com/iam/docs/understanding-roles#role_types>)
  - [Creating Custom Roles](<https://cloud.google.com/iam/docs/creating-custom-roles>)
- [Billing](<https://cloud.google.com/billing/docs>)
  - [Billing accounts](<https://cloud.google.com/billing/docs/how-to/manage-billing-account>)
  - [Budgets](<https://cloud.google.com/billing/docs/how-to/budgets>)
  - [Pricing calculator](<https://cloud.google.com/products/calculator/>)
- [Compute](<https://cloud.google.com/compute/docs>)
  - [Incremental Snapshots](<https://cloud.google.com/compute/docs/disks/snapshots#incremental-snapshots>)
  - [Instance Templates](<https://cloud.google.com/compute/docs/instance-templates>)
  - [Choosing Compute options](<https://cloud.google.com/blog/products/compute/choosing-the-right-compute-option-in-gcp-a-decision-tree>)
  - [Hosting options](<https://cloud.google.com/hosting-options>)
  - [Instance groups](<https://cloud.google.com/compute/docs/instance-groups>)
    - [Groups of managed instances](<https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances>)
  - [GKE](<https://cloud.google.com/kubernetes-engine/docs>)
    - [Overview](<https://cloud.google.com/kubernetes-engine/docs/concepts/kubernetes-engine-overview>)
    - [Pods](<https://cloud.google.com/kubernetes-engine/docs/concepts/pod>)
    - [Deployments](<https://cloud.google.com/kubernetes-engine/docs/concepts/deployment>)
    - [Services](<https://cloud.google.com/kubernetes-engine/docs/concepts/service>)
    - [Types of clusters](<https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters>)
    - [Ingress Internal (HTTPS) Load Balancing](<https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-ilb>)
    - [Ingress External (HTTPS) Load Balancing](<https://cloud.google.com/kubernetes-engine/docs/concepts/ingress-xlb>)
    - [Deploying Workloads](<https://cloud.google.com/kubernetes-engine/docs/how-to/deploying-workloads-overview>)
    - [K8s Object Management](<https://kubernetes.io/docs/concepts/overview/working-with-objects/object-management/>)
    - [Exposing Apps](<https://cloud.google.com/kubernetes-engine/docs/how-to/exposing-apps>)
    - [Autopilot](<https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview>)
  - [App Engine](<https://cloud.google.com/appengine/docs>)
    - [App Engine Environments](<https://cloud.google.com/appengine/docs/the-appengine-environments>)
  - [Cloud Run](<https://cloud.google.com/run/docs>)
    - [Overview](<https://cloud.google.com/blog/topics/developers-practitioners/cloud-run-story-serverless-containers>)
    - [Container Instance Autoscaling](<https://cloud.google.com/run/docs/about-instance-autoscaling>)
  - [Cloud Functions](<https://cloud.google.com/functions>)
    - [Overview](<https://cloud.google.com/blog/topics/developers-practitioners/learn-cloud-functions-snap>)
    - [Event Triggers](<https://cloud.google.com/functions/docs/concepts/events-triggers>)
- Storage
  - [Cloud Storage](<https://cloud.google.com/storage/docs>)
    - [Storage classes](<https://cloud.google.com/storage/docs/storage-classes>)
    - [Object Lifecycle](<https://cloud.google.com/storage/docs/lifecycle>)
  - [Cloud SQL](<https://cloud.google.com/sql/docs/mysql>)
    - [Features](<https://cloud.google.com/sql/docs/mysql/features>)
    - [Create instances](<https://cloud.google.com/sql/docs/mysql/create-instance>)
  - [Bigtable](<https://cloud.google.com/bigtable/docs/overview>)
  - [BigQuery](<https://cloud.google.com/bigquery/docs>)
- [PubSub](<https://cloud.google.com/pubsub/docs/overview>)
- Networking
  - [VPN](<https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview>)
  - [VPC](<https://cloud.google.com/vpc/docs>)
    - [Using VPC](<https://cloud.google.com/vpc/docs/using-vpc>)
    - [Alias IP](<https://cloud.google.com/vpc/docs/alias-ip>)
    - [Bring your own IP](<https://cloud.google.com/vpc/docs/bring-your-own-ip>)
    - [Expand Subnet](<https://cloud.google.com/vpc/docs/using-vpc#expand-subnet>)
- [Cloud Foundation Toolkit (CFT)](<https://cloud.google.com/foundation-toolkit>)
- [Transfer Appliance](<https://cloud.google.com/transfer-appliance/docs/4.0>)

### Other study resources

- <https://googlecloudcheatsheet.withgoogle.com/>
- <https://grumpygrace.dev/posts/gcp-flowcharts/>
- <https://github.com/sathishvj/awesome-gcp-certifications>
- <https://github.com/GoogleCloudPlatform/awesome-google-cloud>
- <https://www.youtube.com/channel/UCIGDDqu5DzlaaC4XzXj_4-A>
- <https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations>
- <https://cloud.google.com/certification>
- <https://cloud.google.com/blog/topics/developers-practitioners/your-google-cloud-database-options-explained>

### Misc

- [Test center](<https://www.kryteriononline.com/Locate-Test-Center>)