from rest_framework import mixins, viewsets
from rest_framework.response import Response
from rest_framework.exceptions import MethodNotAllowed

from .models import Booking, Room, User
from .serializers import (
    BookingSerializer, RoomSerializer, UserSerializer, PrivateUserSerializer,
    PrivateBookingSerializer,
)


class BookingViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def list(self, request):
        room_id = request.query_params.get('room')
        user_id = request.query_params.get('user')
        if not room_id and not user_id:
            raise MethodNotAllowed(
            'GET',
            detail='GET not allowed without room_id or user_id')
        if room_id and user_id:
            # If the user and the room don't match, it will return empty
            qs = Booking.objects.filter(user_id=user_id, user__room_id=room_id)
        elif room_id:
            # All bookings for a room
            qs = Booking.objects.filter(user__room_id=room_id)
        elif user_id:
            # All bookings for a user
            qs = Booking.objects.filter(user_id=user_id)
        serializer = PrivateBookingSerializer(qs, many=True)
        return Response(serializer.data)

class RoomViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.ListModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        room_id = request.query_params.get('room')
        if not room_id:
            raise MethodNotAllowed('GET',
                                   detail='GET not allowed without room_id')
        queryset = User.objects.filter(room_id=room_id)
        serializer = PrivateUserSerializer(queryset, many=True)
        return Response(serializer.data)
