1. You are tasked with defining lifecycle configurations on buckets in Cloud Storage. You need to consider all possible options for transitioning from one storage class to another. All of the following transitions are allowed except for one. Which one is that?
 1. Nearline to coldline
 2. Regional to nearline
 3. Multiregional to coldline
 4. Regional to multiregional
2. Your manager has asked for your help in reducing Cloud Storage charges. You know that some of the files stored in Cloud Storage are rarely accessed. What kind of storage would you recommend for those files?
 1. Nearline
 2. Regional
 3. Coldline
 4. Multiregional
3. You are working with a startup developing analytics software for IoT data. You have to be able to ingest large volumes of data consistently and store it for several months. The startup has several applications that will need to query this data. Volumes are expected to grow to petabyte volumes. Which database should you use?
 1. Cloud Spanner
 2. Bigtable
 3. BigQuery
 4. Datastore
4. A software developer on your team is asking for your help improving the query performance of a database application. The developer is using a Cloud SQL MySQL, Second Generation instance. Which options would you recommend?
 1. Memorystore and SSD persistent disks
 2. Memorystore and HDD persistent disks
 3. Datastore and SSD persistent disks
 4. Datastore and HDD persistent disks
5. You are creating a set of persistent disks to store data for exploratory data analysis. The disks will be mounted on a virtual machine in the us-west2-a zone. The data is historical data retrieved from Cloud Storage. The data analysts do not need peak performance and are more concerned about cost than performance. The data will be stored in a local relational database. Which type of storage would you recommend?
 1. SSDs
 2. HDDs
 3. Datastore
 4. Bigtable
6. Which of the following statements about Cloud Storage is not true?
 1. Cloud Storage buckets can have retention periods.
 2. Lifecycle configurations can be used to change storage class from regional to multiregional.
 3. Cloud Storage does not provide block-level access to data within files stored in buckets.
 4. Cloud Storage is designed for high durability.
7. When using versioning on a bucket, what is the latest version of the object called?
 1. Live version
 2. Top version
 3. Active version
 4. Safe version
8. A product manager has asked for your advice on which database services might be options for a new application. Transactions and support for tabular data are important. Ideally, the database would support common query tools. What databases would you recommend the product manager consider?
 1. BigQuery and Spanner
 2. Cloud SQL and Spanner
 3. Cloud SQL and Bigtable
 4. Bigtable and Spanner
9. The Cloud SQL service provides fully managed relational databases. What two types of databases are available in Cloud SQL?
 1. SQL Server and MySQL
 2. SQL Server and PostgreSQL
 3. PostgreSQL and MySQL
 4. MySQL and Oracle
10. 10. Which of the following Cloud Spanner configurations would have the highest hourly cost?
 1. Located in us-central1
 2. Located in nam3
 3. Located in us-west1-a
 4. Located in nam-eur-asia1
11. Which of the following are database services that do not require you to specify configuration information for VMs?
 1. BigQuery only
 2. Datastore only
 3. Firebase and Datastore
 4. BigQuery, Datastore, and Firebase
12. What kind of data model is used by Datastore?
 1. Relational
 2. Document
 3. Wide-column
 4. Graph
13. You have been tasked with creating a data warehouse for your company. It must support tens of petabytes of data and use SQL for a query language. Which managed database service would you choose?
 1. BigQuery
 2. Bigtable
 3. Cloud SQL
 4. SQL Server
14. A team of mobile developers is developing a new application. It will require synchronizing data between mobile devices and a backend database. Which database service would you recommend?
 1. BigQuery
 2. Firestore
 3. Spanner
 4. Bigtable
15. A product manager is considering a new set of features for an application that will require additional storage. What features of storage would you suggest the product manager consider?
 1. Read and write patterns only
 2. Cost only
 3. Consistency and cost only
 4. None, they are all relevant considerations.
16. What is the maximum size of a Memorystore cache?
 1. 100GB
 2. 300GB
 3. 400GB
 4. 50GB
17. Once a bucket has its storage class set to coldline, what are other storage classes it can transition to?
 1. Regional
 2. Nearline
 3. Multi-regional
 4. None of the above
18. Before you can start storing data in BigQuery, what must you create?
 1. A data set
 2. A bucket
 3. A persistent disk
 4. An entity
19. What features can you configure when running a Second Generation MySQL database in Cloud SQL?
 1. Machine type
 2. Maintenance windows
 3. Failover replicas
 4. All of the above
20. A colleague is wondering why some storage charges are so high. They explain that they have moved all their storage to nearline and coldline storage. They routinely access most of the object on any given day. What is one possible reason the storage costs are higher than expected?
 1. Nearline and coldline incur access charges.
 2. Transfer charges.
 3. Multiregional coldline is more expensive.
 4. Regional coldline is more expensive.
