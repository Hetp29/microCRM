from rest_framework import serializers 
from .models import Record

class UseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = ['id', 'name']