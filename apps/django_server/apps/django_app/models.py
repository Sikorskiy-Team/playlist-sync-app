from djongo import models


class Token(models.Model):
    youtube_token = models.SlugField(max_length=1000, default='')
    spotify_token = models.SlugField(max_length=1000, default='')
    deezer_token = models.SlugField(max_length=1000, default='')

    class Meta:
        abstract = True


class Track(models.Model):
    user_id = models.IntegerField()
    name = models.CharField(max_length=100, default='')
    singer = models.CharField(max_length=100, default='')
    album = models.CharField(max_length=100, default='')
    duration = models.IntegerField()
    img = models.ImageField()
    service = models.CharField(max_length=100, default='')


class Playlist(models.Model):
    name = models.CharField(max_length=100, default='')
    service = models.CharField(max_length=100, default='')
    track_num = models.IntegerField()
    track_list = models.ArrayField(model_container=Track, default='None')
    img = models.ImageField()
    description = models.TextField(max_length=1000, default='')
    public = models.BooleanField()


class Synchronization(models.Model):
    name = models.CharField(max_length=100, default='')
    type = models.TextField(max_length=100, default='')
    way_to_merge = models.TextField(max_length=1000, default='')
    repeatable = models.BooleanField(default=False)
    repeat_period = models.TimeField()
    begin_timestamp = models.TimeField()
    end_timestamp = models.TimeField()
    track_num_ready = models.IntegerField()
    track_num_full = models.IntegerField()
    source_playlist = models.EmbeddedField(model_container=Playlist, default=None)
    target_playlist = models.EmbeddedField(model_container=Playlist, default=None)
    source_service = models.CharField(max_length=100, default='')
    target_service = models.CharField(max_length=100, default='')


class Settings(models.Model):
    language = models.CharField(max_length=100, default='')
    notification = models.BooleanField()


class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.TextField(max_length=100)
    service_token_list = models.EmbeddedField(model_container=Token, default=None)
    synchronization_list = models.ArrayField(model_container=Synchronization, default=None)
    playlist_lits = models.ArrayField(model_container=Playlist, default=None)
    settings = models.EmbeddedField(model_container=Settings, default=None)

    class Meta:
        ordering = ['name']
