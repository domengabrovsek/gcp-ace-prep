# compute engine cli cheatsheet

```bash

# create an instance
gcloud compute instances create [instance_name]



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

```bash
# commands from udemy course
gcloud compute instances create my-test-vm --source-instance-template=my-instance-template-with-custom-image
gcloud compute instance-groups managed list
gcloud compute instance-groups managed delete my-managed-instance-group
gcloud compute instance-groups managed create my-mig --zone us-central1-a --template my-instance-template-with-custom-image --size 1
gcloud compute instance-groups managed set-autoscaling my-mig --max-num-replicas=2 --zone us-central1-a
gcloud compute instance-groups managed stop-autoscaling my-mig --zone us-central1-a
gcloud compute instance-groups managed resize my-mig --size=1 --zone=us-central1-a
gcloud compute instance-groups managed recreate-instances my-mig --instances=my-mig-85fb --zone us-central1-a
gcloud compute instance-groups managed delete my-managed-instance-group --region=us-central1
```
