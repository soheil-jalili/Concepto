from django.contrib import admin
from django.urls import path, include
from concepto.settings import DEBUG ,MEDIA_URL , MEDIA_ROOT
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('home.urls')),
]

if (DEBUG):
    urlpatterns += static(MEDIA_URL , document_root=MEDIA_ROOT)
