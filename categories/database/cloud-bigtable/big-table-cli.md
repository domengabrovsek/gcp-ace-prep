# bigtable cli cheatsheet

```bash
# install cbt commands
gcloud components update
gcloud components install cbt

# .cbtrc file is used to store env info 

# create a table
cbt createtable ace-exam-bt-table

# create a column family
cbt createfamily ace-exam-bt-table colfam1

# set a value
cbt set ace-exam-bt-table row1 colfam1:col1=ace-exam-value

# read and display rows
cbt read ace-exam-bt-table

# list tables and columns
cbt ls
```
