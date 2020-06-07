from rest_framework import mixins, viewsets

from .models import Booking, Room, User
from .serializers import BookingSerializer, RoomSerializer, UserSerializer


class BookingViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class RoomViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
