from my_notes.models import MyNotes
from my_notes.serializers import MyNotesSerializer
from rest_framework import viewsets

# Create your views here.

class MyNotesViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for CRUD operation of notes
    """

    serializer_class = MyNotesSerializer
    queryset = MyNotes.objects.all()
