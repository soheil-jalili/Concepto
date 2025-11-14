from django.contrib import admin
from django.urls import path, include
from concepto.settings import DEBUG ,MEDIA_URL , MEDIA_ROOT
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
   openapi.Info(
      title="Concepto",
      default_version='v1',
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('home.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

if (DEBUG):
    urlpatterns += static(MEDIA_URL , document_root=MEDIA_ROOT)

