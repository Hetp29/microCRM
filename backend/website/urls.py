from django.urls import path
from .views import register, login_view

urlpatterns = [
    path('api/register/', register, name='register'),
    path('api/login/', login_view, name='login'),
]