# Chapter 12

Understand how to initialize Cloud SQL and Cloud Spanner.
Cloud SQL and Cloud Spanner are the two managed relational databases for transaction processing systems. BigQuery is relational but designed for data warehouses and analytics. Understand the need to create databases and tables. Know that SQL is used to query these databases.

Understand how to initialize Cloud Datastore and Cloud Bigtable.
These are two NoSQL offerings. You can add small amounts of data to Cloud Datastore through the console and query it with a SQL-like language called GQL. Cloud Bigtable is a wide-column database that does not support SQL. Bigtable is managed with the cbt command-line tool.

Know how to export data from BigQuery, estimate the cost of a query, and monitor jobs in BigQuery.
BigQuery is designed to work with petabyte-scale data warehouses. SQL is used to query data. Know how to export data using the console. Understand that the bq command line, not gcloud, is the tool for working with BigQuery from the command line.

Know how to convert Cloud Storage bucket storage classes.
Lifecycle policies can change storage classes of buckets when events occur, such as a period of time passes. Know that gsutil rewrite is used to change the storage class of a bucket interactively. Know how to use the console and the command line to move and rename objects.

Understand that Pub/Sub is a message queue.
Applications write data to topics, and applications receive messages through subscriptions to topics. Subscriptions can be push or pull. Unread messages have a retention period after which they are deleted.

Understand that Cloud Dataproc is a managed Spark and Hadoop service.
These platforms are used for big data analytics, machine learning, and large-scale batch jobs, such as large volume extraction, transformation, and load operations. Spark is a good option for analyzing transaction data, but data must be loaded into Spark from its source system.

Know the four command-line tools: gcloud, gsutil, bq, and cbt.
gcloud is used for most products but not all.
gsutil is used to work with Cloud Storage from the command line. If you want to work with BigQuery from the command line, you need to use bq. To work with Bigtable, you use the cbt command.
