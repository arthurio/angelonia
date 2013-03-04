from django.core.serializers import json, serialize
from django.utils import simplejson
from django.http import HttpResponse
from types import NoneType, DictType
from django.db.models.query import QuerySet

class JsonResponse(HttpResponse):
    def __init__(self, obj, status=None):
        if type(status) is not NoneType and type(obj) is DictType:
            status_object = {}
            if not status:
                status_object.update({'errors': {}})
                status_object['errors'].update(obj)
            else:
                status_object.update({'data':obj})
            status_object.update({'status': status})
            obj = status_object
        if isinstance(obj, QuerySet):
            content = serialize('json', obj)
        else:
            content = simplejson.dumps(
                obj, indent=4, cls=json.DjangoJSONEncoder,
                ensure_ascii=False)
        super(JsonResponse, self).__init__(
            content, content_type='application/json')
