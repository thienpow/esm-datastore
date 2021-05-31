#!/bin/bash
echo "hostssl all all all cert clientcert=verify-ca" >> "$PGDATA/pg_hba.conf"
