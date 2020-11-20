from django_server.settings.common import *

#URLs
SERVER_URL = ''
APPLICATION_URL = ''

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

try:
	ALLOWED_HOSTS = ['.now.sh', APPLICATION_URL]
except:
	ALLOWED_HOSTS = ['localhost']

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'server_staging', # dbname
        'USER': '', # master username
        'PASSWORD': '', # master password
        'HOST': '', # Endpoint
        'PORT': '5432',
    }
}

