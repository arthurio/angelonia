from django import forms

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
