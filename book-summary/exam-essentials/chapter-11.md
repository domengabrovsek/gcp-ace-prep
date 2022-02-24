# Chapter 11

Know the major storage system types, including caches, persistent disks, and object storage.
Caches are used to improve application performance by reducing the need to read from databases on disk. Caches are limited by the amount of available memory. Persistent disks are network devices that are attached to VMs. Persistent disks may be attached to multiple VMs in read-only mode. Object storage is used for storing files for shared access and long- term storage.

Know the major kinds of data models.
Relational databases are used for transaction processing systems that require transaction support and strong consistency. Cloud SQL and Cloud Spanner are relational databases used for transaction processing applications. BigQuery uses a relational model but is designed for data warehouses and analytics. The object model is an alternative to a file system model. Objects, stored as files, are treated as atomic units. NoSQL data models include document data models and wide-column models. Datastore and Firebase are document model databases. Bigtable is a wide-column database.

Know the four storage classes in Cloud Storage.
Regional, multiregional, nearline, and coldline are the four storage classes. Multiregional class replicates data across regions. Regional storage replicates data across zones. Nearline is designed for infrequent access, less than once per month. Coldline storage is designed for archival storage, with files being accessed less than once per year. Both nearline and coldline storage incur retrieval charges in addition to charges based on the size of data.

Know that cloud applications may require more than one kind of data store.
For example, an application may need a cache to reduce latency when querying data in Cloud SQL, object storage for the long-term storage of data files, and BigQuery for data warehousing reporting and analysis.

Know that you can apply lifecycle configurations on Cloud Storage buckets.
Lifecycles are used to delete files and change storage class. Know that regional and multiregional class can be changed to nearline or coldline. Nearline storage can change to coldline. Regional class storage cannot be changed to multiregional, and multiregional cannot be changed to regional.

Know the characteristics of different data stores that help you determine which is the best option for your requirements.
Read and write patterns, consistency requirements, transaction support, cost, and latency are often factors.
