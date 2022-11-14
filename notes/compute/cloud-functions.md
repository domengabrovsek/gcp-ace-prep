# cloud functions 

## CLI

```bash
# update components
gcloud components update

# deploy function
gcloud functions deploy cloud_storage_function_test \ 
    --runtime python37 \
    --trigger-resource gcp-ace-exam-test-bucket \ 
    --trigger-event google.storage.object.finalize

# delete a function
gcloud functions delete cloud_storage_function_test
```
