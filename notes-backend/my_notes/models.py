from django.db import models
from django.db.models import fields
from django.contrib.auth.models import User

# Create your models here.

class MyNotes(models.Model):
    """
     data model for notes
    """
    notes = fields.TextField()
    last_modified = fields.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'my_note'
        verbose_name_plural = "my_note"

    def __str__(self):
        return self.notes
