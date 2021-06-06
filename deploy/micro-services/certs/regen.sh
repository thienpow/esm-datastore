
# certstrap init --common-name CA
certstrap request-cert --common-name dbpg-standby-01 --domain dbpg-standby-01
certstrap sign dbpg-standby-01 --CA CA