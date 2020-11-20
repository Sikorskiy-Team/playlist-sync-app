import os

django_env = os.getenv('DJANGO_ENV', 'development')
service_name = "{}".format(django_env) if django_env != "master" else "default" 

string = "runtime: python38\n\nservice: {}\n\nenv_variables:\n  DJANGO_ENV: \"{}\"\n\nhandlers:\n  - url: /.*\n    script: auto".format(service_name, django_env)

with open("./app.yaml", "w") as file:
    file.write(string)


