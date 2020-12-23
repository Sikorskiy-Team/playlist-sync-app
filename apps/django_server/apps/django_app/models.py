from djongo import models


class User(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=100)
    email = models.TextField(max_length=100)
    auth0_token = models.SlugField(max_length = 1000)

    class Meta:
        ordering = ['name']
