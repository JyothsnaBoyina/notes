from django.contrib import admin
from django.urls import path
from my_notes.views import MyNotesViewSet
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'notes', MyNotesViewSet)
