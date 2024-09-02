from django.urls import path
from .views import register, login_view
from dj_rest_auth.registration.views import RegisterView

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', login_view, name='login'),
]
