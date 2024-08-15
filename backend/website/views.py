from django.shortcuts import render
from .models import Record


def home(request):
    return render(request, 'home.html', {})

