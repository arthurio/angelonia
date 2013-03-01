from django.shortcuts import render_to_response
from django.template import RequestContext

def home(request):
    payload = {}
    return render_to_response('home.html', payload, RequestContext(request))

def gallery(request):
    payload = {}
    return render_to_response('gallery.html', payload, RequestContext(request))

def pricing(request):
    payload = {}
    return render_to_response('pricing.html', payload, RequestContext(request))

def contact(request):
    payload = {}
    if request.method == 'POST':
        payload = {}
    return render_to_response('contact.html', payload, RequestContext(request))

