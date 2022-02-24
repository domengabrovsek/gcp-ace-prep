# Chapter 5: Introduction to Computing in GC

1. You have just opened the GCP console at console.google.com. You have authenticated with the user you want to use. What is one of the first things you should do before perform- ing tasks on VMs? 
	1. Open Cloud Shell. 
	2. Verify you can SSH into a VM. 
	3. Verify that the selected project is the one you want to work with. 
	4. Review the list of running VMs. 
2. What is a one-time task you will need to complete before using the console? 
	1. Set up billing
	2. Create a project 
	3. Create a storage bucket 
	4. Specify a default zone 
3. A colleague has asked for your assistance setting up a test environment in Google Cloud. They have never worked in GCP. You suggest starting with a single VM. Which of the following is the minimal set of information you will need? 
	1. A name for the VM and a machine type 
	2. A name for the VM, a machine type, a region, and a zone 
	3. A name for the VM, a machine type, a region, a zone, and a CIDR block 
	4. A name for the VM, a machine type, a region, a zone, and an IP address 
4. An architect has suggested a particular machine type for your workload. You are in the console creating a VM and you don’t see the machine type in the list of available machine types. What could be the reason for this? 
	1. You have selected the incorrect subnet. 
	2. That machine type is not available in the zone you specified. 
	3. You have chosen an incompatible operating system. 
	4. You have not specified a correct memory configuration. 
5. Your manager asks for your help with understanding cloud computing costs. Your team runs dozens of VMs for three different applications. Two of the applications are for use by the marketing department and one is use by the finance department. Your manager wants a way to bill each department for the cost of the VMs used for their applications. What would you suggest to help solve this problem? 
	1. Access controls 
	2. Persistent disks 
	3. Labels and descriptions 
	4. Descriptions only 
6. If you wanted to set the preemptible property using Cloud Console, in which section of the 
   Create An Instance page would you find the option? 
	1. Availability Policy 
	2. Identity And API Access 
	3. Sole Tenancy 
	4. Networking 
7. You need to set up a server with a high level of security. You want to be prepared in case of attacks on your server by someone trying to inject a rootkit (a kind of malware that can alter the operating system). Which option should you select when creating a VM? 
	1. Firewall 
	2. Shield VM 
	3. Project-wide SSH keys 
	4. Boot disk integrity check 
8. All of the following parameters can be set when adding an additional disk through Google Cloud Console, except one. Which one? 
	1. Disk type 
	2. Encryption key management 
	3. Block size 
	4. Source image for the disk 
9. You lead a team of cloud engineers who maintain cloud resources for several departments in your company. You’ve noticed a problem with configuration drift. Some machine configurations are no longer in the same state as they were when created. You can’t find notes or documentation on how the changes were made or why. What practice would you implement to solve this problem? 
	1. Have all cloud engineers use only command-line interface in Cloud Shell. 
	2. Write scripts using gcloud commands to change configuration and store those scripts in 
	   a version control system. 
	3. Take notes when making changes to configuration and store them in Google Drive. 
	4. Limit privileges so only you can make changes so you will always know when and why configurations were changed. 
10. When using the Cloud SDK command-line interface, which of the following is part of commands for administering resources in Compute Engine? 
	1. gcloud compute instances 
	2. gcloud instances 
	3. gcloud instances compute 
	4. None of the above 
11. A newly hired cloud engineer is trying to understand what VMs are running in a particular 
    project. How could the engineer get summary information on each VM running in a project? 
	1. Execute the command gcloud compute list 
	2. Execute the command gcloud compute instances list 
	3. Execute the command gcloud instances list 
	4. Execute the command gcloud list instances 
12. When creating a VM using the command line, how should you specify labels for the VM? 
	1. Use the --labels option with labels in the format of KEYS:VALUES. 
	2. Use the --labels option with labels in the format of KEYS=VALUE. 
	3. Use the --labels option with labels in the format of KEYS,VALUES. 
	4. This is not possible in the command line. 
13. In the boot disk advanced configuration, which operations can you specify when creating a 
    new VM? 
	1. Add a new disk, reformat an existing disk, attach an existing disk 
	2. Add a new disk and reformat an existing disk 
	3. Add a new disk and attach an existing disk 
	4. Reformat an existing disk and attach an existing disk 
14. You have acquired a 10 GB data set from a third-party research firm. A group of data scientists would like to access this data from their statistics programs written in R. R works well with Linux and Windows file systems, and the data scientists are familiar with file operations in R. The data scientists would each like to have their own dedicated VM with the data available in the VM’s file system. What is a way to make this data readily available on a VM and minimize the steps the data scientists will have to take? 
	1. Store the data in Cloud Storage. 
	2. Create VMs using a source image created from a disk with the data on it. 
	3. Store the data in Google Drive. 
	4. Load the data into BigQuery. 
15. The Network tab of the create VM form is where you would perform which of the follow- ing operations? 
	1. Set the IP address of the VM 
	2. Add a network interface to the VM 
	3. Specify a default router 
	4. Change firewall configuration rules 
16. You want to create a VM using the gcloud command. What parameter would you include 
    to specify the type of boot disk? 
	1. boot-disk-type 
	2. boot-disk 
	3. disk-type 
	4. type-boot-disk 
17. Which of the following commands will create a VM with four CPUs that is named web-server-1? 
	1. gcloud compute instances create --machine-type=n1-standard-4 web-server-1 
	2. gcloud compute instances create --cpus=4 web-server-1 
	3. gcloud compute instances create --machine-type=n1-standard-4 –instance- name web-server-1 
	4. gcloud compute instances create --machine-type=n1-4-cpu web-server-1 
18. Which of the following commands will stop a VM named web-server-1? 
	1. gcloud compute instances halt web-server-1 
	2. gcloud compute instances --terminate web-server1 
	3. gcloud compute instances stop web-server-1 
	4. gcloud compute stop web-server-1 
19. You have just created an Ubuntu VM and want to log into the VM to install some software 
    packages. Which network service would you use to access the VM? 
	1. FTP 
	2. SSH 
	3. RDP 
	4. ipconfig 
20. Your management team is considering three different cloud providers. You have been asked to summarize billing and cost information to help the management team compare cost structures between clouds. Which of the following would you mention about the cost of VMs in GCP? 
	1. VMs are billed in 1-second increments, cost varies with the number of CPUs and amount of memory in a machine type, you can create custom machine types, preemptible VMs cost up to 80 percent less than standard VMs, and Google offers discounts for sustained usage. 
	2. VMs are billed in 1-second increments and VMs can run up to 24 hours before they will be be shut down. 
	3. Google offers discounts for sustained usage in only some regions, cost varies with the number of CPUs and amount of memory in a machine type, you can create custom machine types, preemptible VMs cost up to 80 percent less than standard VMs. 
	4. VMs are charged for a minimum of 1 hour of use and cost varies with the number of CPUs and amount of memory in a machine type. 