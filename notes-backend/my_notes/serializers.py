from rest_framework import serializers

from .models import MyNotes

class MyNotesSerializer(serializers.ModelSerializer):

    class Meta:
        model  = MyNotes
        fields = [ 'id', 'notes', 'last_modified', 'user' ]
