from django.urls import path
from .views import GetHome

app_name = "home"
urlpatterns = [
    path('home/',GetHome.as_view() , name='home'),
]