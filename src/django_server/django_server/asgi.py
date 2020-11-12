"""
ASGI config for django_server project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

environment = False
try:
    '''
    Retreive ENV_AS_BRANCH environment variable, provided by now.json file
    Set environment as name of the branch that the app was deployed using
    '''
    environment_as_branch = eval(os.environ['ENV_AS_BRANCH'])
except:
    environment_as_branch = False

if environment_as_branch:
    # GitHub
    try:
        # Set environment as the branch that the app was deployed using
        github_branch = os.environ['NOW_GITHUB_COMMIT_REF']
        print("Deploying from GitHub...")
        environment = github_branch
    except:
        environment = False

# Local
if not environment:
    try:
        # If local `now` deployment
        environment = os.environ['DJANGO_ENV']
        print("Deploying locally...")
    except:
        # If local `manage.py` runserver
        """You can change 'development' to 'local' to run over local SQLite DB"""
        environment = 'development'

# Set settings as environment name
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_server.settings.{environment}')

# Update environment variables from env.py based on environment name
exec(f'from django_server.env import {environment} as env_variables')
os.environ.update(env_variables)

# Logging
print(f'Set {environment} environment')

application = get_asgi_application()
