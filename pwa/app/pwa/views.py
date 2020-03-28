from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'index.html',{"name":"Sunny Kumar"})
# Create your views here.
