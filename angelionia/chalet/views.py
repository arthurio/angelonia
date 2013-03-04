# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from angelionia.chalet.forms import ContactForm
from angelionia.chalet.utils import JsonResponse

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
        form = ContactForm(request.POST)
        if form.is_valid():
            text_content, html_content = form.build_response()
            email = EmailMultiAlternatives('Réservation', text_content, to=[settings.EMAIL_HOST_USER])
            email.attach_alternative(html_content, "text/html")
            email.send();
            return JsonResponse({}, status=True)
        else:
            errors = {}
            for err in form.errors:
                errors.update({ err: form.errors[err]})
            return JsonResponse(errors, status=False)
    return render_to_response('contact.html', payload, RequestContext(request))
