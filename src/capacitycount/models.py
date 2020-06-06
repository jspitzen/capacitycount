from uuid import uuid4
from django.db import models


class Room(models.Model):
    id = models.UUIDField(
         primary_key = True,
         default = uuid4,
         editable = False
    )
    name = models.CharField(max_length=127)
    capacity = models.PositiveIntegerField()

    def __str__(self):
        return self.name



class User(models.Model):
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    name = models.CharField(max_length=127)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Booking(models.Model):
    id = models.UUIDField(
        primary_key = True,
        default = uuid4,
        editable = False
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    comment = models.CharField(max_length=255, blank=True, default='')

    def __str__(self):
        return f'{self.user}@{self.user.room}'