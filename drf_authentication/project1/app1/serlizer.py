from rest_framework import serializers
from . models import Student

class StuSerilizer(serializers.ModelSerializer):
    # created_by=serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model=Student
        fields='__all__'