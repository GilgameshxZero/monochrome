```bash
apt install nginx
```

Redirect from HTTPS to HTTP:

`/etc/nginx/sites-available/default`:

```
server {
        server_name gilgamesh.cc;
        listen 443 ssl;
        listen [::]:443 ssl;
        ssl_certificate fullchain.pem;
        ssl_certificate_key privkey.pem;
        return 301 http://$host$request_uri;
}
server {
        listen 49574;
}
```

```bash
nginx -s reload
```

Additional sites can be multiplexed over HTTPS.
