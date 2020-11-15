#!/bin/bash
echo """runtime: python38

service: django-$DJANGO_ENV

env_variables:
  DJANGO_ENV: \"$DJANGO_ENV\"

handlers:
  - url: /.*
    script: auto
"""
