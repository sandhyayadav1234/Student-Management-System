from django.db import models
from django.contrib.auth import get_user_model

User=get_user_model()

# Create your models here.
class Student(models.Model):
    roll=models.IntegerField(primary_key=True)
    # created_by=models.ForeignKey(User,on_delete= models.CASCADE,related_name='posts',default=None)
    name=models.CharField(max_length=40,default=None)
    addrr=models.CharField(max_length=40)
    City=models.CharField(max_length=40)
    Phone_no=models.BigIntegerField()
    email=models.EmailField()

