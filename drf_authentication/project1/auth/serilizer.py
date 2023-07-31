from rest_framework import serializers
from django.contrib.auth.models import User
from app1.serlizer import StuSerilizer


class AuthSerilizer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    # posts=StuSerilizer(many=True, read_only=True)

    class Meta:
        model=User
        fields=['id','password','username','email']

    def create(self,validated_data):
        return User.objects.create_user(**validated_data)