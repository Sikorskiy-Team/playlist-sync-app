from django.contrib.auth.models import Group
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django_app.models import User

from django_app.serializers import UserSerializer


class UserList(APIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def get(self, request, format=None):
        users = User.objects.all()
        user_serialzer = UserSerializer(users, many=True)
        return Response(user_serialzer.data)
        # permission_classes = [permissions.IsAuthenticated]