# app engine 

## CLI

```bash
# install components for app engine
gcloud components install app-engine-python

# install components for app engine (with optional flags)
gcloud components install app-engine-python --version --project --no-promote

# stop serving versions of the app
gcloud app versions stop v1 v2

# split traffic between different versions
gcloud app services set-traffic serv1 --splits v1=.4 v2=.6

# split traffic between different versions (with optional flags)
gcloud app services set-traffic serv1 --splits v1=.4 v2=.6 --migrate --split-by ip|cookie|random
```
