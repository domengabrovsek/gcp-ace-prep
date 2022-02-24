# compute engine cli cheatsheet

```bash
# start an instance or more instances
gcloud compute instances start [instance_name]

# --async flag provides more info about start/stop
gcloud compute instances start [instance_name] --async

# stop an instance
gcloud compute instances stop [instance_name]

# specify zone in which to start instance
gcloud compute instances start [instance_name] --zone [zone_name]

# delete an instance
gcloud compute instance delete [instance_name]

# specify to keep or delete disks (boot|data)
gcloud compute instance delete [instance_name] --delete-disks
gcloud compute instance delete [instance_name] --keep-disks=all|boot|data

# get list of zones
gcloude compute zones list
```
