<div align="center"><img src="https://github.com/Sikorskiy-Team/playlist-sync-app/raw/main/logo.png">

# CubeMusic
![GitHub repo size](https://img.shields.io/github/repo-size/Sikorskiy-Team/playlist-sync-app) [![Maintainability](https://api.codeclimate.com/v1/badges/623ac26a15072a3b2153/maintainability)](https://codeclimate.com/github/Sikorskiy-Team/playlist-sync-app/maintainability) ![GitHub](https://img.shields.io/github/license/Sikorskiy-Team/playlist-sync-app) [![FOSSA Status](https://app.fossa.com/api/projects/custom%2B21281%2Fgithub.com%2FSikorskiy-Team%2Fplaylist-sync-app.svg?type=shield)](https://app.fossa.com/projects/custom%2B21281%2Fgithub.com%2FSikorskiy-Team%2Fplaylist-sync-app?ref=badge_shield)
A Gatsby-Django app to help you sync your playlists.


## Installing / Getting started

A quick introduction of the minimal setup you need to start an app & running.

``` shell
$ git clone https://github.com/Sikorskiy-Team/playlist-sync-app.git
$ cd palylist-sync-app
```

Firstly clone the repo.

### Django server

Install, create, and start a virtual environment to work with a Django server:

```shell
$ python -m pip install virtualenv
...
$ cd src/django_server/
$ virtualenv -p python venv
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

### Gatsby app
Install dependencies:

```shell
$ cd ../gatsby-app/
$ npm install
```


## Start dev server 

We have two development servers here: **Django and GatsbyJS**. You can start them withing 2 console windows.
Prepare terminal instances and start `django_server` in first:

```shell
$ cd src/django_server/
$ python manage.py runserver 0.0.0.0:9000
```
And  `gatsby-app` development server then:
```shell
$ cd src/gatsby-app/
$ gatsby develop
```

## Features

What's all the bells and whistles this project can perform?

* You can sync playlists from different streaming services
* You can also add playlists to track for automatic synchronization
* You can also create links to a playlist hosted on multiple streaming platforms

## Configuration

Please note that this project uses `git-crypt`, so some configuration files (`settings`, `.env`) will be encrypted. You can replace them with the sample files you filled in.


## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.


## Licensing

The code in this project is licensed under BSD 3-Clause License license.
