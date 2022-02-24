1. Cloud SQL is a fully managed relational database service, but database administrators still have to perform some tasks. Which of the following tasks do Cloud SQL users need to perform?
 1. Applying security patches
 2. Performing regularly scheduled backups
 3. Creating databases
 4. Tuning the operating system to optimize Cloud SQL performance
2. Which of the following commands is used to create a backup of a Cloud SQL database?
 1. gcloud sql backups create
 2. gsutil sql backups create
 3. gcloud sql create backups
 4. gcloud sql backups export
3. Which of the following commands will run an automatic backup at 3:00 a.m. on an instance called ace-exam-mysql?
 1. gcloud sql instances patch ace-exam-mysql --backup-start-time 03:00
 2. gcloud sql databases patch ace-exam-mysql –-backup-start-time 03:00
 3. cbt sql instances patch ace-exam-mysql -–backup-start-time 03:00
 4. bq gcloud sql instances patch ace-exam-mysql -–backup-start-time 03:00
4. What is the query language used by Datastore?
 1. SQL
 2. MDX
 3. GQL
 4. DataFrames
5. What is the correct command-line structure to export data from Datastore?
 1. gcloud datastore export '[NAMESPACE]' gs://[BUCKET_NAME]
 2. gcloud datastore export gs://[BUCKET_NAME]
 3. gcloud datastore export --namespaces='[NAMESPACE]' gs://[BUCKET_NAME]
 4. gcloud datastore dump --namespaces='[NAMESPACE]' gs://[BUCKET_NAME]
6. When you enter a query into the BigQuery query form, BigQuery analyzes the query and  displays an estimate of what metric?
 1. Time required to enter the query
 2. Cost of the query
 3. Amount of data scanned
 4. Number of bytes passed between servers in the BigQuery cluster
7. You want to get an estimate of the volume of data scanned by BigQuery from the command
   line. Which option shows the command structure you should use?
 1. gcloud BigQuery query estimate [SQL_QUERY]
 2. bq ––location=[LOCATION] query --use_legacy_sql=false ––dry_run [SQL_QUERY]
 3. gsutil ––location=[LOCATION] query --use_legacy_sql=false ––dry_run [SQL_QUERY]
 4. cbt BigQuery query estimate [SQL_QUERY]
8. You are using Cloud Console and want to check on some jobs running in BigQuery. You navigate to the BigQuery part of the console. Which menu item would you click to view jobs?
 1. Job History.
 2. Active Jobs.
 3. My Jobs.
 4. You can’t view job status in the console; you have to use bq on the command line.
9. You want to estimate the cost of running a BigQuery query. What two services within Google Cloud Platform will you need to use?
 1. BigQuery and Billing
 2. Billing and Pricing Calculator
 3. BigQuery and Pricing Calculator
 4. Billing and Pricing Calculator
10. You have just created a Cloud Spanner instance. You have been tasked with creating a way to store data about a product catalog. What is the next step after creating a Cloud Spanner instance that you would perform to enable you to load data?
 1. Run gcloud spanner update-security-patches.
 2. Create a database within the instance.
 3. Create tables to hold the data.
 4. Use the Cloud Spanner console to import data into tables created with the instance.
11. You have created a Cloud Spanner instance and database. According to Google best practices, how often should you update VM packages using apt-get?
 1. Every 24 hours.
 2. Every 7 days.
 3. Every 30 days.
 4. Never, Cloud Spanner is a managed service.
12. Your software team is developing a distributed application and wants to send messages from one application to another. Once the consuming application reads a message, it should be deleted. You want your system to be robust to failure, so messages should be available for at least three days before they are discarded. Which GCP service is best designed to support this use case?
 1. Bigtable
 2. Dataproc
 3. Cloud Pub/Sub
 4. Cloud Spanner
13. Your manager asks you to set up a bare-bones Pub/Sub system as a sandbox for new developers to learn about messaging systems. What are the two resources within Pub/Sub you will need to create?
 1. Topics and tables
 2. Topics and databases
 3. Topics and subscriptions
 4. Tables and subscriptions
14. Your company is launching an IoT service and will receive large volumes of streaming data. You have to store this data in Bigtable. You want to explore the Bigtable environment from the command line. What command would you run to ensure you have command-line tools installed?
 1. apt-get install bigtable-tools
 2. apt-get install cbt
 3. gcloud components install cbt
 4. gcloud components install bigtable-tools
15. You need to create a table called iot-ingest-data in Bigtable. What command would you use?
 1. cbt createtable iot-ingest-data
 2. gcloud bigtable tables create ace-exam-bt-table
 3. gcloud bigtable create tables ace-exam-bt-table
 4. gcloud create ace-exam-bt-table
16. Cloud Dataproc is a managed service for which two big data platforms?
 1. Spark and Cassandra
 2. Spark and Hadoop
 3. Hadoop and Cassandra
 4. Spark and TensorFlow
17. Your department has been asked to analyze large batches of data every night. The jobs will run for about three to four hours. You want to shut down resources as soon as the analysis is done, so you decide to write a script to create a Dataproc cluster every night at midnight. What command would you use to create a cluster called spark-nightly-analysis in the us-west2-a zone?
 1. bq dataproc clusters create spark-nightly-analysis ––zone us-west2-a
 2. gcloud dataproc clusters create spark-nightly-analysis ––zone us-west2-a
 3. gcloud dataproc clusters spark-nightly-analysis ––zone us-west2-a
 4. None of the above
18. You have a number of buckets containing old data that is hardly ever used. You don’t want to delete it, but you want to minimize the cost of storing it. You decide to change the storage class to coldline for each of those buckets. What is the command structure that you would use?
 1. gcloud rewrite -s [STORAGE_CLASS] gs://[PATH_TO_OBJECT]
 2. gsutil rewrite -s [STORAGE_CLASS] gs://[PATH_TO_OBJECT]
 3. cbt rewrite -s [STORAGE_CLASS] gs://[PATH_TO_OBJECT]
 4. bq rewrite -s [STORAGE_CLASS] gs://[PATH_TO_OBJECT]
19. You want to rename an object stored in a bucket. What command structure would you use?
 1. gsutil cp gs://[BUCKET_NAME]/[OLD_OBJECT_NAME] gs://[BUCKET_NAME]/ [NEW_OBJECT_NAME]
 2. gsutil mv gs://[BUCKET_NAME]/[OLD_OBJECT_NAME] gs://[BUCKET_NAME]/ [NEW_OBJECT_NAME]
 3. gsutil mv gs://[OLD_OBJECT_NAME] gs://[NEW_OBJECT_NAME]
 4. gcloud mv gs://[OLD_OBJECT_NAME] gs://[NEW_OBJECT_NAME]
20. An executive in your company emails you asking about creating a recommendation system that will help sell more products. The executive has heard there are some GCP solutions that may be good fits for this problem. What GCP service would you recommend the executive look into?
 1. Cloud Dataproc, especially Spark and its machine learning library
 2. Cloud Dataproc, especially Hadoop
 3. Cloud Spanner, which is a global relational database that can hold a lot of data
 4. Cloud SQL, because SQL is a powerful query language
