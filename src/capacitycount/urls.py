from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'booking', views.BookingViewSet, basename='booking')
router.register(r'room', views.RoomViewSet, basename='room')
router.register(r'user', views.UserViewSet, basename='user')
urlpatterns = router.urls