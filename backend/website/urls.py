from django.urls import path
from . import views
from .views import RecordListCreate, RecordRetrieveUpdateDestroy, register

urlpatterns = [
    path('api/register/', views.RegisterUser.as_view(), name='register-user'),
]