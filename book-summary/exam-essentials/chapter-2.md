# Chapter 2

**Understand the differences between Compute Engine, Kubernetes Engine, App Engine, and Cloud Functions.**
Compute Engine is Google’s VM service. Users can choose CPUs, memory, persistent disks, and operating systems. They can further customize a VM by adding graphics processing units for compute-intensive operations. VMs are managed individually or in groups of similar servers.
Kubernetes Engine manages groups of virtual servers and applications that run in contain- ers. Containers are lighter weight than VMs. Kubernetes is called an orchestration service because it distributes containers across clusters, monitors cluster health, and scales as pro- scribed by configurations.
App Engine is Google’s PaaS. Developers can run their code in a language-specific sand- box when using the standard environment or in a container when using the flexible environment. App Engine is a serverless service, so customers do not need to specify VM configurations or manage servers.
Cloud Functions is a serverless service that is designed to execute short-running code that responds to events, such as file uploads or messages being published to a message queue. Functions may be written in Node.js or Python.

**Understand what is meant by serverless.**
Serverless means customers using a service do not need to configure, monitor, or maintain the computing resources underlying the service. It does not mean there are no servers involved—there are always physical servers that run applications, functions, and other software. Serverless only refers to not needing to manage those underlying resources.

**Understand the difference between object and file storage.**
Object stores are used to store and access file-based resources. These objects are referenced by a unique identifier, such as a URL. Object stores do not provide block or file system services, so they are not suitable for database storage. Cloud Storage is GCP’s object storage service.
File storage supports block-based access to files. Files are organized into directories and subdirectories. Google’s Filestore is based on the NFS.

**Know the different kinds of databases.**
Databases are broadly divided into relational and NoSQL databases.
Relational databases support transactions, strong consistency, and the SQL query languages. Relational databases have been traditionally difficult to horizontally scale. Cloud Spanner is a global relational database that provides the advantages of relational databases with the scalability previously found only in NoSQL databases.
NoSQL databases are designed to be horizontally scalable. Other features, such as strong consistency and support for standard SQL, are often sacrificed to achieve scalability and low-latency query responses. NoSQL databases may be key-value stores like Cloud Memorystore, document databases like Cloud Datastore, or wide-column databases such as Cloud Bigtable.

**Understand virtual private clouds.**
A VPC is a logical isolation of an organization’s cloud resources within a public cloud. In GCP, VPCs are global; they are not restricted to a single zone or region. All traffic between GCP services can be transmitted over the Google net- work without the need to send traffic over the public Internet.

**Understand load balancing.**
Load balancing is the process of distributing a workload across a group of servers. Load balancers can route workload based on network-level or application-level rules. GCP load balancers can distribute workloads globally.

**Understand developer and management tools.**
Developer tools support common work- flows in software engineering, including using version control for software, building containers to run applications and services, and making containers available to other developers and orchestration systems, such as Kubernetes Engine.
Management tools, such as Stackdriver, Monitoring, and Logging, are designed to provide systems administration information to developers and operators who are responsible for ensuring applications are available and operating as expected.

**Know the types of specialized services offered by Google Cloud Platform.**
GCP includes a growing list of specialized services for data analytics, and AI and machine learning.

**Know the main differences between on-premises and public cloud computing.**
On-premise computing is computing, storage, networking, and related services that occur on infrastructure managed by a company or organization for its own use. Hardware may be located literally on the premises in a company building or in a third-party colocation facility. Colocation facilities provide power, cooling, and physical security, but the customers of the colocation facility are responsible for all the setup and management of the infrastructure.

Public cloud computing uses infrastructure and services provided by a cloud provider such as Google, AWS, or Microsoft. The cloud provider maintains all physical hardware and facilities. It provides a mix of services, such as VMs that are configured and maintained by customers and serverless offerings that enable customers to focus on application development-while the cloud provider takes on more responsibility for maintaining the underlying compute infrastructure.
