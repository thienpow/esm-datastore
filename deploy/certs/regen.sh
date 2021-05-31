
# certstrap init --common-name CA
certstrap request-cert --common-name localhost --domain localhost
certstrap sign localhost --CA CA