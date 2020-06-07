from rest_framework import serializers

from .models import Room, User, Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class PrivateUserSerializer(serializers.ModelSerializer):
    # Don't expose the user id
    class Meta:
        model = User
        fields = ['name']

class PrivateBookingSerializer(serializers.ModelSerializer):
    # Don't expose user id
    user = serializers.StringRelatedField()
    class Meta:
        model = Booking
        fields = '__all__'
