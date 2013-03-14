from django.conf.urls import patterns, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('angelonia.views',
    (r'^$', 'home'),
    (r'^home$', 'home'),
    (r'^gallery$', 'gallery'),
    (r'^neighborhood$', 'neighborhood'),
    (r'^pricing$', 'pricing'),
    url(r'^contact$', 'contact', name='contact'),
)
