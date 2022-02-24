#

```bash
# create a cluster
gcloud dataproc clusters create cluster-bc3d ––zone us-west2-a

# submit a job to the cluster
gcloud dataproc jobs submit spark ––cluster cluster-bc3d ––jar ace_exam_jar.jar
```
