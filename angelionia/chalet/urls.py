from django.conf.urls import patterns, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('angelionia.chalet.views',
    (r'^$', 'home'),
    (r'^gallery$', 'gallery'),
    (r'^pricing$', 'pricing'),
    url(r'^contact$', 'contact', name='contact'),
)
