#!/usr/bin/env bash
docker run --rm -e DLS_URL=192.168.50.44 -e TZ=America/Denver -e DLS_PORT=7070 -p 7070:443 -v /opt/docker/fastapi-dls/cert:/app/cert -v dls-db:/app/database collinwebdesigns/fastapi-dls:latest
