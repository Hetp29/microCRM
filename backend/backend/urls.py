from django.contrib import admin
from django.urls import path
from website import views 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.Home, name='home'), 
    path('api/records/', views.RecordListCreate.as_view(), name='record-list-create'),
]
