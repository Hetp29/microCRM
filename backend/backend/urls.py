from django.contrib import admin
from django.urls import path
from website import views 


urlpatterns = [
    path('', views.Home, name='home'),
    path('register/', views.register, name='register'),
    #path('', views.Home, name='home'), 
    path('api/register/', views.register, name='api-register'),
]
