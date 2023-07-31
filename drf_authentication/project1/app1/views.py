from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from .serlizer import Student,StuSerilizer
from rest_framework.permissions import IsAuthenticated
from  rest_framework_simplejwt.authentication import JWTAuthentication


# Create your views here.
class StuView(viewsets.ModelViewSet):
    queryset=Student.objects.all()
    serializer_class=StuSerilizer
    authentication_classes=[JWTAuthentication]
    permission_classes=[IsAuthenticated]
