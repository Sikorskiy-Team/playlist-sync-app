from djongo import models


class User(models.Model):
    name = models.TextField(max_length=100)
    email = models.TextField(max_length=100)

    class Meta:
        ordering = ['name']
