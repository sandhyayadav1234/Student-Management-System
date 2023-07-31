from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .serilizer import User,AuthSerilizer
# Create your views here.
class RegisterView(ListCreateAPIView):
    serializer_class=AuthSerilizer
    queryset=User.objects.all()
