# Local development

In this section, we start with the base. We are going to set up a local development environment with a GitHub public repository, so you could share your code with the community and keep sensitive data safe. To start, you need to have `python3.8`, `npm`, and `git`.

## Getting started

Fork the [repo](https://github.com/guandjoy/redfish) and change the repository name to your own. Then clone it locally:

```shell
$ git clone git@github.com:username/your-app-name.git
$ cd your-app-name
```

## Django server

Install, create, and start a virtual environment to work with a Django server:

```shell
$ python -m pip install virtualenv
...
$ cd src/django_server/
$ virtualenv -p python3.8 venv
...
$ source venv/bin/activate
```

Install dependencies:

```shell
$ pip install -r requirements.txt
```

Apply migrations:

```shell
$ python manage.py migrate --run-syncdb
```

Create a superuser:

```shell
$ python manage.py createsuperuser
Provide username and password
```

## And Landing Page dependencies as well

```shell
$ cd ../gatsby-app/
$ npm install
```

## Start development servers

We have three development servers here: **Django, Create React App, and GatsbyJS**. You can start them withing 3 console windows, or, as we highly recommend, withing [tmux](https://github.com/tmux/tmux/blob/master/.github/README.md).

- ### Start with terminal windows

Prepare 3 terminal instances and start `django_server` in first:

```shell
$ cd src/django_server/
$ python manage.py runserver 0.0.0.0:9000
```