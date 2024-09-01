from django.urls import path
from . import views
from .views import RecordListCreate, RecordRetrieveUpdateDestroy, register, login_view

urlpatterns = [
    path('api/register/', views.register, name='register'),
    path('api/login/', login_view, name='login')
]