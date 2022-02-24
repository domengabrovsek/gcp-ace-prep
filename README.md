# gcp-ace-prep

Preparation for GCP Associate Cloud Engineer certification

## Resources

Courses:

- <https://www.udemy.com/course/google-cloud-certification-associate-cloud-engineer/>
- <https://www.coursera.org/professional-certificates/cloud-engineering-gcp#courses>
- <https://www.whizlabs.com/google-cloud-certified-associate-cloud-engineer/>

Articles:

- <https://googlecloudcheatsheet.withgoogle.com/>
- <https://grumpygrace.dev/posts/gcp-flowcharts/>
- <https://github.com/sathishvj/awesome-gcp-certifications>
- <https://github.com/GoogleCloudPlatform/awesome-google-cloud>
- <https://www.youtube.com/channel/UCIGDDqu5DzlaaC4XzXj_4-A>
- <https://cloud.google.com/docs/enterprise/best-practices-for-enterprise-organizations>
- <https://cloud.google.com/certification>

Test center:

- <https://www.kryteriononline.com/Locate-Test-Center>

Databases:

- <https://cloud.google.com/blog/topics/developers-practitioners/your-google-cloud-database-options-explained>

## CLI structure

```bash

gcloud [service] [subservice] [command]

# example
gcloud compute instances list
gcloud container clusters list

# flags
--account - specifies account
--configuration - use a configuration file with key-value pairs
--flatten - flatten key-value records if key has multiple values
--format - specify format (JSON, YAML, CSV, TEXT)
--help - help details
--project - specify project
--quiet - disable interactive prompts
--verbosity - specify level of output (debug, info, warning, error)
--zone - specify zone
```

## Other commands

```bash
# cloud storage commands

# change type of storage
gsutil rewrite -s [STORAGE_CLASS] gs://[PATH_TO_OBJECT]

# move objects between buckets
gsutil mv gs://[SOURCE_BUCKET_NAME]/[SOURCE_OBJECT_NAME] gs://[DESTINATION_BUCKET_NAME]/[DESTINATION_OBJECT_NAME]
------------------------------------------------------------
# datastore commands

# create cloud storage buckets first
gsutil mb gs://[BUCKET_NAME]/

# create a backup
gcloud –namespaces='[NAMESPACE]' gs://[BUCKET_NAME}

# export a backup
gcloud datastore export –namespaces='(default)' gs://ace_exam_backups

# import a backup
gcloud datastore import gs://[BUCKET]/[PATH]/[FILE].overall_export_metadata
------------------------------------------------------------
# sql commands

# connect to the database
gcloud sql connect [db_name] --user=root

# create a backup 
gcloud sql backups create ––async ––instance [INSTANCE_NAME]

# auto backups point in time
gcloud sql instances patch [INSTANCE_NAME] –-backup-start-time [HH:MM]
```
