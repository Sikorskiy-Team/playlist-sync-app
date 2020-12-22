from django.urls import path, include
from rest_framework import routers
from . import views


urlpatterns = [
    path('users/', views.UserList.as_view()),
]
