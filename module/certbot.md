# certbot

certbot provides HTTPS certificates which need to be periodically renewed. It is intended to be used on servers together with emilia.

## Installation

```bash
apt install certbot
```

## Generation and renewal

Generating new certificates and renewing existing ones follow the same procedure.

```bash
certbot certonly --manual --preferred-challenges=dns
```

Domain names.

* `gilgamesh.cc`
* `*.gilgamesh.cc`

```bash
cp /etc/letsencrypt/live/gilgamesh.cc/fullchain.pem /etc/nginx/
cp /etc/letsencrypt/live/gilgamesh.cc/privkey.pem /etc/nginx/
```
