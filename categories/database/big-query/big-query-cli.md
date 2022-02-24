# big query cli cheatsheet

```bash
# estimate query cost
bq ––location=[LOCATION] query ––use_legacy_sql=false ––dry_run [SQL_QUERY]

# check status of bigquery job
bq --location=US show -j gcpace-project:US.bquijob_119adae7_167c373d5c3
```
