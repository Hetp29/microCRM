from django.shortcuts import render
from .models import Record
from .serializers import UseSerializer
from rest_framework import generics
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import json

class RegisterUser(APIView):
    def post(self, request):
        serializer = UseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def Home(request):
    return HttpResponse("Welcome to the home page")
