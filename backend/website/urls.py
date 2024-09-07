from django.urls import path
from .views import register, login_view
from . import views

urlpatterns = [
    path('api/register/', register, name='register'),
    path('api/login/', login_view, name='login'),
    path('forgot-password/', views.password_reset_request, name='password_reset_request'),
    path('reset-password/', views.reset_password, name='reset_password'),
]