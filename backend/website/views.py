from django.shortcuts import render
from .models import Record
from .serializers import RecordSerializer
from rest_framework import generics
from django.http import HttpResponse

def Home(request):
    return HttpResponse("Hello, world!")


class RecordListCreate(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    
class RecordRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer