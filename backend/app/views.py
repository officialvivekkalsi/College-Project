from django.shortcuts import render
from .models import Students
from .serializers import StuSerializers
from rest_framework.viewsets import ModelViewSet

class StudentsInfo(ModelViewSet):
    queryset=Students.objects.all()
    serializer_class=StuSerializers