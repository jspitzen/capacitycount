from django.shortcuts import render, get_object_or_404

from capacitycount.models import Room

def index(request):
    return render(request, 'frontend/index.html', context={

    })
