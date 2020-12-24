from django.contrib.auth.models import Group
from django.http import Http404
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from cheat import CreatePlaylist
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

from apps.django_app.models import User
from apps.django_app.serializers import UserSerializer


def get(request):
    request
    cp = CreatePlaylist()
    cp.add_song_to_playlist()
    return Response(None)
