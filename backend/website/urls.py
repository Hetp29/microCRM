from django.urls import path
from . import views
from .views import RecordListCreate, RecordRetrieveUpdateDestroy

urlpatterns = [
    path('api/records/', RecordListCreate.as_view(), name='record-list-create'),
]