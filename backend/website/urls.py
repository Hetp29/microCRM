from django.urls import path
from . import views
from .views import RecordListCreate, RecordRetrieveUpdateDestroy

urlpatterns = [
    path('', views.Home, name='home'),
    path('api/records/', RecordListCreate.as_view(), name='record-list-create'),
    path('api/records/<int:pk>/', RecordRetrieveUpdateDestroy.as_view(), name='record-retrieve-update-destroy'),
]