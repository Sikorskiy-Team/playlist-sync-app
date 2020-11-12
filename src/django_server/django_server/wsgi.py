"""
WSGI config for django_server project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# Set settings as environment name
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_server.settings')

# # Update environment variables from env.py based on environment name
# exec(f'from django_server.env import {environment} as env_variables')
# os.environ.update(env_variables)
#
# # Logging
# print(f'Set {environment} environment')

application = get_wsgi_application()
