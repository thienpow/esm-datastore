
ALTER USER  postgres WITH PASSWORD 'notezpass99~-~';

# important!

- address:
      socket_address:
        address: 0.0.0.0
        port_value: 80
    filter_chains:
    - filters:
      - name: envoy.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          codec_type: auto
          stat_prefix: ingress_http
          route_config:
            virtual_hosts:
            - name: admin
              domains:
              - "esm-admin.aadi.my"
              routes:
              - match:
                  prefix: "/"
                redirect:
                  path_redirect: "/"
                  https_redirect: true
          http_filters:
          - name: envoy.router
            config: {}