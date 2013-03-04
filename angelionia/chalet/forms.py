# -*- coding: utf-8 -*-
from django import forms
from django.template.loader import get_template
from django.template import Context

class ContactForm(forms.Form):
    first_name = forms.CharField(required = True)
    last_name = forms.CharField(required = True)
    email = forms.EmailField(max_length=254, required=True)
    phone = forms.CharField(required = False)
    start_date = forms.DateField(required = True, input_formats=['%d/%m/%Y'])
    end_date = forms.DateField(required = True, input_formats=['%d/%m/%Y'])
    people_number = forms.IntegerField(required = True)
    calling_hours = forms.CharField(required = False)
    message = forms.CharField(required = True)

    def build_response(self):
        plaintext = get_template('email.txt')
        html = get_template('email.html')
        context = Context(self.cleaned_data)

        return plaintext.render(context), html.render(context)
