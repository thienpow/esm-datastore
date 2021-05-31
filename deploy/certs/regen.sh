
# certstrap init --common-name CA
certstrap request-cert --common-name postgres-master --domain postgres-master
certstrap sign postgres-master --CA CA