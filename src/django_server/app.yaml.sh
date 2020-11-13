#!/bin/bash
echo """runtime: python38

env_variables:
  DJANGO_ENV: \"$DJANGO_ENV\"

handlers:
  - url: /.*
    script: auto
"""
