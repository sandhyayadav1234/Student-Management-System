from django.urls import path
from . import views
urlpatterns=[
    path('reg/',views.RegisterView.as_view())

]