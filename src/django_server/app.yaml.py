import os

django_env = os.getenv('DJANGO_ENV', 'development')
service_name = f"django-{django_env}" if django_env != "master" else "default" 

string = f"runtime: python38\n\nservice: service_name\n\nenv_variables:\n  DJANGO_ENV: \"{django_env}\"\n\nhandlers:\n  - url: /.*\n    script: auto"

with open("./app.yaml", "w") as file:
    file.write(string)


