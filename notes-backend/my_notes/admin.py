from django.contrib import admin

# Register your models here.

from my_notes.models import MyNotes


class MyNotesAdmin(admin.ModelAdmin):
    pass

admin.site.register(MyNotes, MyNotesAdmin)
