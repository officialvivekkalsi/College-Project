from rest_framework import serializers
from .models import Students
class StuSerializers(serializers.ModelSerializer):
    class Meta:
        model= Students 
        fields='__all__'
        